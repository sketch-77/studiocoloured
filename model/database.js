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

  //Creating clients table.
  sql =
    "DROP TABLE clients; CREATE TABLE clients (id INT AUTO_INCREMENT, company_name VARCHAR(255), client_name VARCHAR(255), company_url VARCHAR(255), mobile_number VARCHAR(255), client_email VARCHAR(255), PRIMARY KEY(id));";
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

  //creating projects table.
  sql =
    "DROP TABLE projects; CREATE TABLE projects (id INT AUTO_INCREMENT, project_title VARCHAR(255), project_summary VARCHAR(255), project_status VARCHAR(255), client_id INT, PRIMARY KEY(id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `projects` was successful!");
  });
  // Dummy table for project.

  // creating table for tasks.
  sql =
    "DROP TABLE tasks; CREATE TABLE tasks (id INT AUTO_INCREMENT, task_title VARCHAR(255), task_summary VARCHAR(255), task_status VARCHAR(255), project_id INT, PRIMARY KEY(id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `tasks` was successful!");
  });
  // creating dummy table for tasks.

  // creating table for images.
  sql =
    "DROP TABLE images; CREATE TABLE images (id INT AUTO_INCREMENT, alt_text VARCHAR(255), img_url VARCHAR(255), project_id INT, PRIMARY KEY(id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `images` was successful!");
  });

  con.end();
});
