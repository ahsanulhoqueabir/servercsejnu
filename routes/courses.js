const express = require("express");
const {
  addNew,
  getCourses,
  updateCourse,
} = require("../controllers/courseController.js");

const router = express.Router();
router.post("/add", addNew);
router.get("/", getCourses);
router.put("/update/:id", updateCourse);

module.exports = router;
