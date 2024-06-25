const mongoose = require("mongoose");

const classRoutinSchema = new mongoose.Schema(
  {
    day: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
    },
    periods: [
      {
        time: {
          type: String,
          required: true,
        },
        room: {
          type: String,
          required: true,
        },
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      },
    ],
  },
  {
    timestamps: true,
    _id: false,
  }
);
const examRoutineSchema = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
  },
  { _id: false }
);
const RoutineSchema = new mongoose.Schema(
  {
    exam: [examRoutineSchema],
    class: [classRoutinSchema],
  },
  {
    timestamps: true,
  }
);
const Routine = mongoose.model("Routine", RoutineSchema);
module.exports = Routine;
