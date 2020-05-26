const db = require("../model/helper");

function taskShouldExist(req, res, next) {
  const { id } = req.params;

  db(`SELECT id FROM tasks WHERE id = ${id};`)
    .then((results) => {
      if (results.data.length) {
        next();
      } else {
        res.status(404).send("task not found");
      }
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = taskShouldExist;
