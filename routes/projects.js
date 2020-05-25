var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");

const projectShouldExist = require("../guards/projectShouldExist");
const getProjects = require("../guards/getProjects");

// ** client_id = /client/:id (How to use this referance?)

router.use(bodyParser.json());

// GET projects list
router.get("/", getProjects);

// *TEST to see if project exists then mark status if its complete
router.put("/:id", projectShouldExist, (req, res) => {
  const { id } = req.params;

  db(`UPDATE projects SET complete = !complete WHERE id = ${id};`)
    .then(() => {
      getProjects(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

// GET one project
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db(`SELECT * FROM projects WHERE id = ${id}`)
    .then((results) => {
      res.send(results.data[0]);
    })
    .catch((err) => res.status(500).send(err));
});

// INSERT a new project into DB
router.post("/id:", (req, res) => {
  const { title, project_status } = req.body;
  db(
    `INSERT INTO projects (title, project_status, complete ) VALUES ('${title},'${project_status}', 0);`
  )
    .then(() => {
      getProjects(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

router.delete("/:id", projectShouldExist, (req, res) => {
  //your code here
  const { id } = req.params;

  db(`DELETE FROM projects WHERE id = ${id};`)
    .then(() => {
      getProjects(req, res);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = router;
