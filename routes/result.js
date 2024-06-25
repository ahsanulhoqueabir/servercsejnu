const express = require("express");
const result = require("../controllers/resultcontroll.js");
const router = express.Router();
router.post("/add", result.add);
router.get("/", result.getResults);
router.get("/:id", result.getOneResult);
router.put("/update/:id", result.updateResult);
router.delete("/delete/:id", result.deleteResult);
module.exports = router;
