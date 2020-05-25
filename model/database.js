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
  database: DB_NAME || "scoloured",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "";

  //Creating clients table.
  sql = `DROP TABLE clients; CREATE TABLE clients (id INT AUTO_INCREMENT, company VARCHAR(255), firstname VARCHAR(255), lastname VARCHAR(255), email VARCHAR(255), mobile VARCHAR(255), url VARCHAR(255), PRIMARY KEY(id));`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `clients` was successful!");
  });

  // //Creation of dummy table for testing purpose.
  // sql = `INSERT INTO clients (company, firstname, lastname, email, mobile, url) VALUES ('Lufthansa', 'Zoobee', 'Zurname', 'zzz@lhzxd.com', '+34798899381','www.xszzzzzzz.com');`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Creation of 'test client' was successful!");
  // });

  //creating projects table.
  sql =
    "DROP TABLE projects; CREATE TABLE projects (id INT AUTO_INCREMENT, title VARCHAR(255), project_status INT(3), complete BOOLEAN, client_id INT, PRIMARY KEY(id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `projects` was successful!");
  });

  // Dummy table for project.
  // sql =
  //   "INSERT INTO projects (title, project_status, complete) VALUES (Client needs a new brand identity for logo, website and name cards.', '20', '0');";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Creation of 'project test' was successful!");
  // });

  // creating table for tasks.
  sql =
    "DROP TABLE tasks; CREATE TABLE tasks (id INT AUTO_INCREMENT, title VARCHAR(255), task_status INT(3), complete BOOLEAN, project_id INT, PRIMARY KEY(id));";
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
