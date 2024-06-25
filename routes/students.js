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
  updateSpecificField,
  deleteField,
  modifyData,
} = require("../controllers/StudentRouteController.js");
const {
  verifyJWT,
  verifyAdmin,
  verifyUser,
} = require("../middleware/middleware.js");

const router = express.Router();

router.post("/add", verifyJWT, verifyAdmin, createStudent);
router.get("/basicinfo", BasicInfo);
router.get("/allstudents", getSortedData);
router.get("/queryData", verifyJWT, verifyUser, queryData);
router.put("/updateStudent", verifyJWT, verifyUser, updateStudent);
router.put("/addNewField", addNewField);
router.put("/result", verifyJWT, addResult);
router.get("/result", verifyJWT, verifyUser, getResult);
router.put("/updateField", updateSpecificField);
router.put("/delete", deleteField);
router.put("/modify", modifyData);

module.exports = router;
