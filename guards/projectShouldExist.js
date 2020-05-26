const db = require("../model/helper");

function projectShouldExist(req, res, next) {
  const { id } = req.params;

  db(`SELECT id FROM projects WHERE id = ${id};`)
    .then((results) => {
      if (results.data.length) {
        next();
      } else {
        res.status(404).send("project not found");
      }
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = projectShouldExist;
