const db = require("../model/helper");

function getClients(req, res, next) {
  db(`SELECT * FROM clients ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = getClients;
