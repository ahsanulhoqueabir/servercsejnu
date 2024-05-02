import cors from "cors";
import express from "express";
import mongoose from "mongoose";
const port = process.env.port || 5000;
import studentRoute from "./routes/students.js";
import dotenv from "dotenv";
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

app.listen(port, () => {
  connection();
  console.log(`Server is running at ${port}`);
});
