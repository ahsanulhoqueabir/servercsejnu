const express = require("express");

const {
  getNotices,
  addNotice,
  upcomingNotice,
  updateNotice,
  deleteNotice,
} = require("../controllers/NoticeController.js");
const { verifyJWT, verifyAdmin } = require("../middleware/middleware.js");

const router = express.Router();
router.get("/", getNotices);
router.post("/add", verifyJWT, verifyAdmin, addNotice);
router.get("/upcoming", upcomingNotice);
router.put("/update", updateNotice);
router.delete("/delete", verifyJWT, verifyAdmin, deleteNotice);

module.exports = router;
