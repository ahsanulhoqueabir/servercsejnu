const mongoose = require("mongoose");

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String },
    date: { type: Date },
    time: { type: String },
    room: { type: String },
    description: { type: [String] },
    tag: { type: [String] },
    code: { type: String },
    bgcolor: {
      type: String,
    },
    left: {
      type: Number,
    },
    top: {
      type: Number,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
  },
  {
    timestamps: true,
  }
);

const notice = mongoose.model("notices", NoticeSchema, "notices");
module.exports = notice;
