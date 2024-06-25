const express = require("express");
const routine = require("../controllers/routine.js");

const router = express.Router();

router.post("/addClassRoutine", routine.addClassRoutine);
router.get("/all", routine.getRoutine);

module.exports = router;
