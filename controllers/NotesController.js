const notes = require("../models/Notes.js");
const courses = require("../models/courseHistory.js");

const projection = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

const addNotes = async (req, res) => {
  try {
    const note = new notes(req.body);
    const courseID = await courses.find({ code: note.code });

    const modified = new notes({
      ...req.body,
      course: courseID[0]._id,
    });
    await modified.save();
    res.status(201).json({
      message: "Note added successfully",
      data: modified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getNotes = async (req, res) => {
  try {
    const query = req.query;
    const note = await notes
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
      message: "Notes fetched successfully",
      count: note.length,
      data: note,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateNotes = async (req, res) => {
  try {
    const query = req.query;
    const update = req.body;
    const note = await notes.findByIdAndUpdate(query.id, update, {
      new: true,
    });
    if (!note) throw Error("Note not found");
    res.status(200).json({
      message: "Note Updated Successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const deleteNote = async (req, res) => {
  try {
    const query = req.query;
    const note = await notes.findByIdAndDelete(query.id);
    if (!note) throw Error("Note not found");
    res.status(200).json({
      message: "Note Deleted Successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNotes,
  addNotes,
  updateNotes,
  deleteNote,
};
