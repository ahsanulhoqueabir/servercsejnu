const express = require("express");
const { allTutorial, addTutorial } = require("../controllers/TutorialControl");

const router = express.Router();
router.post("/add", addTutorial);
router.get("/", allTutorial);
module.exports = router;
