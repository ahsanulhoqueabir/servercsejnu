const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const jwtRoute = require("../routes/jwt.js");
const studentRoute = require("../routes/students.js");
const courseRoute = require("../routes/courses.js");
const notesRoute = require("../routes/notes.js");
const noticeRoute = require("../routes/notices.js");
const tutorial = require("../routes/tutorial.js");
const resultRoute = require("../routes/result.js");
const messageRoute = require("../routes/message.js");
const routineRoute = require("../routes/routine.js");
const qbankRouter = require("../routes/qbank.js");
const adminRoute = require("../routes/adminspecial.js");
// import dotenv from "dotenv";
const dotenv = require("dotenv");
const sendNotice = require("../utility/SendMails.js");
dotenv.config();

const app = express();
const corsOptions = { origin: true, Credential: true };

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "Welcome to Computer Science & Engineering,Jagannath University Server"
  );
});
// /.netlify/functions/api
app.use("/.netlify/functions/api", router);

const dburi = process.env.DB_URI;
// "mongodb+srv://newuser:dh9fHEqg7yp3Mq9j@cluster0.fjx23sv.mongodb.net/csejnu?retryWrites=true&w=majority";
mongoose
  .connect(dburi)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
app.use(express.json());
app.use(cors(corsOptions));
app.use("/.netlify/functions/api/v1", jwtRoute);
app.use("/.netlify/functions/api/v1/students", studentRoute);
app.use("/.netlify/functions/api/v1/courses", courseRoute);
app.use("/.netlify/functions/api/v1/notes", notesRoute);
app.use("/.netlify/functions/api/v1/notice", noticeRoute);
app.use("/.netlify/functions/api/v1/tutorial", tutorial);
app.use("/.netlify/functions/api/v1/result", resultRoute);
app.use("/.netlify/functions/api/v1/messages", messageRoute);
app.use("/.netlify/functions/api/v1/routine", routineRoute);
app.use("/.netlify/functions/api/v1/qbank", qbankRouter);
app.use("/.netlify/functions/api/v1/admin", adminRoute);
app.post("/.netlify/functions/api/admin/sendNotice", async (req, res) => {
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

module.exports.handler = serverless(app);

//     app.listen(port, () => {
//   connection();
//   console.log(`Server is running at ${port}`);
// });
