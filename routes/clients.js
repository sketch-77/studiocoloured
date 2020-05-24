var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

// const getClients = require("../guards/getClients");
router.use(bodyParser.json());

const getClients = (req, res) => {
  db("SELECT * FROM clients;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
};

// GET clients list
router.get("/", getClients);

// GET one client
router.get("/:id", function (req, res, next) {
  const { id } = req.params;

  db(`SELECT * FROM clients WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new client into DB
// router.post("/", function(req,res,next){
//     const {company_name, client_name, email, company_url, mobile_number}
// });

module.exports = router;
