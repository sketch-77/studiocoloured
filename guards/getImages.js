const db = require("../model/helper");

function getImages(req, res, next) {
  db(`SELECT * FROM images ORDER BY id ASC;`)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
}

module.exports = getImages;
