const message = require("../controllers/message.js");
const express = require("express");

const router = express.Router();

router.post("/add", message.createMessage);
router.get("/", message.getMessages);

module.exports = router;
