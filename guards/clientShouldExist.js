const db = require("../model/helper");

function clientsShouldExist(req, res, next) {
  const { id } = req.params;

  db(`SELECT id FROM clients WHERE id = ${id};`)
    .then((results) => {
      if (results.data.length) {
        next();
      } else {
        res.status(404).send("clients not found");
      }
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = clientsShouldExist;
