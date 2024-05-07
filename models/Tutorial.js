const mongoose = require("mongoose");

const tutorialSchema = new mongoose.Schema(
  {
    topic: { type: String, required: true },
    date: {
      type: Date,
      default: Date.now,
    },
    code: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
    classURL: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const tutorial = mongoose.model("tutorial", tutorialSchema, "tutorial");
module.exports = tutorial;
