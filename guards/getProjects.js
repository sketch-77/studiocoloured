const db = require("../model/helper");

function getProjects(req, res, next) {
  db(`SELECT * FROM projects ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = getProjects;
