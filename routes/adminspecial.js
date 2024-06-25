const express = require("express");
const route = require("../controllers/adminspecial.js");
const { verifyJWT, verifyAdmin } = require("../middleware/middleware.js");
const router = express.Router();
router.put("/manageuser", route.manageuser);
module.exports = router;
