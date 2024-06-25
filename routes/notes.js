const express = require("express");

const {
  addNotes,
  getNotes,
  updateNotes,
  deleteNote,
} = require("../controllers/NotesController.js");
const { verifyJWT } = require("../middleware/middleware.js");
const router = express.Router();

router.post("/add", verifyJWT, addNotes);
router.get("/", verifyJWT, getNotes);
router.put("/update", verifyJWT, updateNotes);
router.delete("/delete", verifyJWT, deleteNote);

module.exports = router;
