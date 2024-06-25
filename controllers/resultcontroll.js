const Result = require("../models/result.js");
const Student = require("../models/Student.js");

const add = async (req, res) => {
  try {
    const result = new Result(req.body);
    const newResult = await result.save();
    await Student.findOneAndUpdate(
      {
        id: req.body.studentId,
      },
      {
        $push: {
          results: newResult._id,
        },
      }
    );

    res.status(200).json({
      message: `Result of ID ${result.studentId} added successfully`,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getResults = async (req, res) => {
  try {
    const results = await Result.find(req.query)
      .sort({
        "cumulative.cgpa": -1,
      })
      .populate("student", {
        name: 1,
        email: 1,
        phone: 1,
        address: 1,
        _id: 0,
      });
    res.status(200).json(results);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getOneResult = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    const result = await Result.findByIdAndDelete(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { add, getResults, getOneResult, updateResult, deleteResult };
