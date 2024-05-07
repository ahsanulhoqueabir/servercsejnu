const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const studentRoute = require("./routes/students.js");
const courseRoute = require("./routes/courses.js");
const notesRoute = require("./routes/notes.js");
const noticeRoute = require("./routes/notices.js");
const tutorialRoute = require("./routes/tutorial.js");
// import dotenv from "dotenv";
const dotenv = require("dotenv");
const sendNotice = require("./utility/SendMails.js");
dotenv.config();

const app = express();
const corsOptions = { origin: true, Credential: true };

app.get("/", (req, res) => {
  res.send(
    "Welcome to Computer Science & Engineering,Jagannath University Server"
  );
});

const connection = async () => {
  try {
    await mongoose.connect(`${process.env.DB_URI}`, {});
    console.log("connected");
  } catch (err) {
    console.log("Error: ", err);
  }
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/students", studentRoute);
app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/notes", notesRoute);
app.use("/api/v1/notice", noticeRoute);
app.use("/api/v1/tutorial", tutorialRoute);
app.post("/admin/sendNotice", async (req, res) => {
  try {
    const { info, emails } = req.body;
    emails.map((std) => {
      sendNotice({ details: { data: info, emails: std } });
    });
    res.status(200).json({ message: "Notice sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(port, () => {
  connection();
  console.log(`Server is running at ${port}`);
});
