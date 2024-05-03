const Notices = require("../models/Notice.js");
const courses = require("../models/courseHistory.js");
const { randomColor, Randomposition } = require("../utility/function.js");
const projection = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
  Marks: 0,
  Credit: 0,
  code: 0,
};

const getNotices = async (req, res) => {
  try {
    const query = req.query;
    const notices = await Notices.find(query, projection).populate(
      "course",
      projection
    );
    res.status(200).json(notices);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const addNotice = async (req, res) => {
  try {
    const notice = new Notices(req.body);
    const courseID = await courses.find({ code: notice.code });

    const modified = new Notices({
      ...req.body,
      course: courseID[0]._id,
    });
    await modified.save();
    res.status(201).json({
      message: "Notice added successfully",
      data: modified,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const upcomingNotice = async (req, res) => {
  try {
    const notices = await Notices.find(
      {
        date: { $gte: new Date() },
      },
      projection
    ).populate("course", projection);

    const newData = [];

    for (let n of notices) {
      n.bgcolor = randomColor();
      n.left = Randomposition();
      n.top = Randomposition();
      newData.push(n);
    }

    res.status(200).json({
      count: newData.length,
      data: newData,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const updateNotice = async (req, res) => {
  try {
    const query = req.query;
    const update = req.body;
    const notice = await Notices.findByIdAndUpdate(query.id, update, {
      new: true,
    });
    if (!notice) throw Error("Notice not found");

    res.status(200).json({
      message: "Notice Updated Successfully",
      data: notice,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
const deleteNotice = async (req, res) => {
  try {
    const query = req.query;
    const notice = await Notices.findByIdAndDelete(query.id);
    if (!notice) throw Error("Notice not found");

    res.status(200).json({
      message: "Notice Deleted Successfully",
      data: notice,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
module.exports = {
  getNotices,
  addNotice,
  upcomingNotice,
  updateNotice,
  deleteNotice,
};
