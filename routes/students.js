const express = require("express");
const {
  getStudents,
  createStudent,
  BasicInfo,
  getSortedData,
  queryData,
  updateStudent,
  addNewField,
  addResult,
  getResult,
} = require("../controllers/StudentRouteController.js");

const router = express.Router();

router.post("/", createStudent);
router.get("/basicinfo", BasicInfo);
router.get("/allstudents", getSortedData);
router.get("/queryData", queryData);
router.put("/updateStudent", updateStudent);
router.put("/addNewField", addNewField);
router.put("/result", addResult);
router.get("/result", getResult);

module.exports = router;
