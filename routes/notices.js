const express = require("express");

const {
  getNotices,
  addNotice,
  upcomingNotice,
  updateNotice,
  deleteNotice,
} = require("../controllers/NoticeController.js");

const router = express.Router();
router.get("/", getNotices);
router.post("/add", addNotice);
router.get("/upcoming", upcomingNotice);
router.put("/update", updateNotice);
router.delete("/delete", deleteNotice);

module.exports = router;
