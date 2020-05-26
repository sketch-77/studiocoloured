var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

const clientShouldExist = require("../guards/clientShouldExist");

const getClients = require("../guards/getClients");

router.use(bodyParser.json());

// function getClients(req, res) {
//   db(`SELECT * FROM clients ORDER BY id ASC;`)
//     .then((results) => {
//       res.send(results.data);
//     })
//     .catch((err) => res.status(500).send(err));
// }

// router.get("/", (req, res) => {
//   res.send("Welcome to Studio Coloured Clients List!");
// });

// GET clients list
router.get("/", getClients);

// *TEST to see if client exists then mark status if its complete
// router.put("/:id", clientShouldExist, (req, res) => {
//   const { id } = req.params;

//   db(`UPDATE clients SET complete = !complete WHERE id = ${id};`)
//     .then(() => {
//       getClients(req, res);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// GET one client
router.get("/:id", clientShouldExist, (req, res) => {
  const { id } = req.params;

  db(`SELECT * FROM clients WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// // INSERT a new client into DB
// router.post("/", function (req, res, next) {
//   const { company, firstname, lastname, email, mobile, url } = req.body;
//   db(
//     `INSERT INTO clients (company, firstname, lastname, email, mobile, url) VALUES ('${company}', '${firstname}','${lastname}','${email}','${mobile}','${url}');`
//   )
//     .then((results) => {
//       res.send({ msg: "DATA WAS ADDED YAAAY!" });
//     })
//     .catch((err) => res.status(500).sender(err));
// });

// INSERT a new client into DB
router.post("/", (req, res) => {
  const { company, firstname, lastname, email, mobile, url } = req.body;
  db(
    `INSERT INTO clients(company, firstname, lastname, email, mobile, url) VALUES ('${company}', '${firstname}','${lastname}','${email}','${mobile}','${url}');`
  )
    .then(() => {
      getClients(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// // DELETE a client from the DB
// router.delete("/:id", function (req, res, next) {
//   //your code here
//   const { id } = req.params;
//   let client = null;

//   db(`SELECT * FROM clients WHERE id = ${id}`)
//     .then((results) => {
//       client = results.data[0];
//       console.log("YOU HERE???");
//       console.log(client);

//       db(`DELETE FROM clients WHERE id = ${id};`)
//         .then(() => {
//           res.send({ msg: `The client ${client.company} was deleted!` });
//         })
//         .catch((err) => res.status(500).send(err));
//     })
//     .catch((err) => res.status(500).send(err));
// });

// DELETE a client from the DB
router.delete("/:id", clientShouldExist, (req, res) => {
  //your code here
  const { id } = req.params;

  db(`DELETE FROM clients WHERE id = ${id};`)
    .then(() => {
      getClients(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// UPDATE a client from the DB [AND THEN DISPLAY NEW LIST ????]
// router.post("/", function (req, res, next) {
//   // const { company, firstname, lastname, email, mobile, url } = req.body;
//   db(
//     `UPDATE studiocoloured.clients SET (company, firstname, lastname, email, mobile, url) VALUES ('${company}', '${firstname}','${lastname}','${email}','${mobile}','${url}') WHERE id = ${id};`
//   )
//     .then(() => {
//       res.send({ msg: "DATA WAS ADDED YAAAY!" });
//     })
//     .catch((err) => res.status(500).sender(err));
// });

module.exports = router;
