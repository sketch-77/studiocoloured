var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

const imageShouldExist = require("../guards/imageShouldExist");
const getImages = require("../guards/getImages");

// ** client_id = /client/:id (How to use this referance?)

router.use(bodyParser.json());

// GET tasks list
router.get("/", getImages);

// *TEST to see if task exists then mark status if its complete
router.put("/:id", imageShouldExist, (req, res) => {
  const { id } = req.params;

  db(`UPDATE tasks SET complete = !complete WHERE id = ${id};`)
    .then(() => {
      getImages(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// GET one task
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db(`SELECT * FROM tasks WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new task into DB
router.post("/id:", (req, res) => {
  const { title, summary, task_status, project_id } = req.body;
  db(
    `INSERT INTO tasks (title, summary, task_status, email, mobile, url) VALUES ('${title}', '${summary}','${task_status}','${project_id}');`
  )
    .then(() => {
      getImages(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", imageShouldExist, (req, res) => {
  //your code here
  const { id } = req.params;

  db(`DELETE FROM tasks WHERE id = ${id};`)
    .then(() => {
      getImages(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
