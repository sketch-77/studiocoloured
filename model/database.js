require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS || "root",
  database: DB_NAME || "studiocoloured",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "";

  //Creatingclients table.
  sql =
    "DROP TABLE if exists clients; CREATE TABLE clients(id INT NOT NULL AUTO_INCREMENT,companyName VARCHAR(255) NOT NULL,clientName VARCHAR(255) NOT NULL,email varchar NOT NULL,companyUrl VARCHAR(12) NOT NULL,mobileNr VARCHAR(15) NOT NULL,PRIMARY KEY (id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `clients` was successful!");
  });

  //Creation of dummy table for testing purpose.
  sql =
    "INSERT INTO clients (companyName, clientName, email,  companyUrl, mobileNr) VALUES ('La Curacion Holistic', 'Adzo Sowani', 'lch@gmail.com', 'www.lacuracionholistica.es', '+34 657314526');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Creation of 'test' was successful!");
  });

  //creating project table.

  // Dummy table for project.

  con.end();
});
