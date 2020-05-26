var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

const imageShouldExist = require("../guards/imageShouldExist");
const getImages = require("../guards/getImages");

// ** client_id INT = /client/:id (use this referance to create JOIN project id)

router.use(bodyParser.json());

// GET images list
router.get("/", getImages);

// *TEST to see if task exists then mark status if its img_url
// router.put("/:id", imageShouldExist, (req, res) => {
//   const { id } = req.params; `UPDATE images S

//   db(`UPDATE images SET img_url = !img_url WHERE id = ${id};`)
//     .then(() => {
//       getImages(req, res);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// GET one task
router.get("/:id", imageShouldExist, (req, res) => {
  const { id } = req.params;

  db(`SELECT * FROM images WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new task into DB
router.post("/id:", (req, res) => {
  const { alt_text, img_url, project_id } = req.body;
  db(
    `INSERT INTO images (alt_text, img_url, project_id) VALUES ('${alt_text}', '${img_url}', ${project_id}');`
  )
    .then(() => {
      getImages(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", imageShouldExist, (req, res) => {
  //your code here
  const { id } = req.params;

  db(`DELETE FROM images WHERE id = ${id};`)
    .then(() => {
      getImages(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
