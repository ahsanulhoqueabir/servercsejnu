// import express from "express";
const express = require("express");
const {
  getStudents,
  createStudent,
  allStudentsMail,
  getSortedData,
  queryData,
  updateStudent,
  addNewField,
  addResult,
  getResult,
} = require("../controllers/StudentRouteController.js");

const router = express.Router();

// router.get("/", getStudents);
router.post("/", createStudent);
router.get("/getStudentsMail", allStudentsMail);
router.get("/allstudents", getSortedData);
router.get("/queryData", queryData);
router.put("/updateStudent", updateStudent);
router.put("/addNewField", addNewField);
router.put("/result", addResult);
router.get("/result", getResult);

// export default router;
module.exports =(router)
