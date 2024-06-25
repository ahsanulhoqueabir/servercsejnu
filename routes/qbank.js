const qbank = require("../controllers/qbank.js");
const express = require("express");

const router = express.Router();
router.get("/", qbank.allQbank);
router.post("/add", qbank.addQbank);
module.exports = router;
