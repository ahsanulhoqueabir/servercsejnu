const mongoose = require("mongoose");
const QuestionBankSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    semester: {
      type: String,
    },
    batch: {
      type: Number,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
    },
    Qurl: [
      {
        type: String,
      },
    ],
    Aurl: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("QuestionBank", QuestionBankSchema);
