const db = require("../model/helper");

function getTasks(req, res, next) {
  db(`SELECT * FROM tasks ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = getTasks;
