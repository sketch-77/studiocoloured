const db = require("../model/helper");

function imageShouldExist(req, res, next) {
  const { id } = req.params;

  db(`SELECT id FROM images WHERE id = ${id};`)
    .then((results) => {
      if (results.data.length) {
        next();
      } else {
        res.status(404).send("image not found");
      }
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = imageShouldExist;
