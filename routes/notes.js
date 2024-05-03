const express = require("express");

const {
  addNotes,
  getNotes,
  updateNotes,
  deleteNote,
} = require("../controllers/NotesController.js");
const router = express.Router();

router.post("/add", addNotes);
router.get("/", getNotes);
router.put("/update", updateNotes);
router.delete("/delete", deleteNote);

module.exports = router;
