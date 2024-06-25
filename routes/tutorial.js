const express = require("express");
const { allTutorial, addTutorial } = require("../controllers/TutorialControl");
const { verifyJWT } = require("../middleware/middleware");

const router = express.Router();
router.post("/add", verifyJWT, addTutorial);
router.get("/", verifyJWT, allTutorial);
module.exports = router;
