const tutorials = require("../models/Tutorial.js");
const courses = require("../models/courseHistory.js");

const projection = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

const addTutorial = async (req, res) => {
  try {
    const newtutorial = new tutorials(req.body);
    const courseID = await courses.find({ code: newtutorial.code });

    const modified = new tutorials({
      ...req.body,
      course: courseID[0]._id,
    });
    await modified.save();
    res.status(201).json({
      message: "Tutorial added successfully",
      data: modified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const allTutorial = async (req, res) => {
  try {
    const query = req.query;
    const tutorial = await tutorials
      .find(
        query,
        {
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
          courseName: 0,
        },
        {}
      )
      .populate("course", {
        _id: 0,
        __v: 0,
        createdAt: 0,
        updatedAt: 0,
        Marks: 0,
        Credit: 0,
        code: 0,
      });

    res.status(200).json({
      message: "Tutorial fetched successfully",
      count: tutorial.length,
      data: tutorial,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  addTutorial,
  allTutorial,
};
