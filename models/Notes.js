const mongoose = require("mongoose");
const noteSchema = new mongoose.Schema(
  {
    author: { type: String },
    id: { type: String },
    title: { type: String },
    topic: { type: String },
    link: { type: String },
    code: { type: String },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model("notes", noteSchema, "notes");
module.exports = Note;
