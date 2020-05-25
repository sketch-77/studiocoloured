var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

// const clientShouldExist = require("../guards/clientShouldExist");
// router.use(bodyParser.json());

const getClients = (req, res, next) => {
  db(`SELECT * FROM clients ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

router.get("/", (req, res) => {
  res.send("Welcome to Studio Coloured Clients List!");
});

// GET clients list
router.get("/", getClients);
// router.get("/clients", getClients);

// **** TEST to see if client exists attempt 1
// router.put("/clients/:id", clientShouldExist, (req, res, next) => {
//   const { id } = req.params;

//   db(`UPDATE clients SET complete = !complete WHERE id = ${id};`)
//     .then(() => {
//       getClients(req, res);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// GET one client attempt 2
router.get("/clients/:id", function (req, res, next) {
  const { id } = req.params;

  db(`SELECT * FROM clients WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new client into DB
router.post("/", function (req, res, next) {
  const { company, firstname, lastname, email, mobile, url } = req.body;
  db(
    `INSERT INTO clients (company, firstname, lastname, email, mobile, url) VALUES ('${company}', '${firstname}','${lastname}','${email}','${mobile}','${url}');`
  )
    .then((results) => {
      res.send({ msg: "DATA WAS ADDED YAAAY!" });
    })
    .catch((err) => res.status(500).sender(err));
});

// DELETE a client from the DB
router.delete("/:id", function (req, res, next) {
  //your code here
  const { id } = req.params;
  let client = null;

  db(`SELECT * FROM clients WHERE id = ${id}`)
    .then((results) => {
      client = results.data[0];
      // console.log("YOU HERE???");
      // console.log(client);

      db(`DELETE FROM clients WHERE id = ${id};`)
        .then((results) => {
          res.send({ msg: `The client ${client.company} was deleted!` });
        })
        .catch((err) => res.status(500).send(err));
    })
    .catch((err) => res.status(500).send(err));
});

// UPDATE a client from the DB

module.exports = router;
