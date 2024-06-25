const mongoose = require("mongoose");
const resultSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
    level: {
      type: String,
    },
    semester: {
      type: String,
    },
    results: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
        gp: {
          type: Number,
        },
        lg: {
          type: String,
        },
      },
    ],
    summary: {
      gpa: {
        type: Number,
      },
      lg: {
        type: String,
      },
      tgp: {
        type: Number,
      },
    },
    cumulative: {
      prev_tgp: {
        type: Number,
      },
      tgp: {
        type: Number,
      },
      tcp: {
        type: Number,
      },
      ecp: {
        type: Number,
      },
      cgpa: {
        type: Number,
      },
      comments: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
