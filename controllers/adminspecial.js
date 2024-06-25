const Students = require("../models/Student.js");

const manageuser = async (req, res) => {
  try {
    const data = req.body;
    const students = await Students.findByIdAndUpdate(req.query.id, {
      $set: {
        ...data,
      },
    });
    res.status(200).json({ data: students });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  manageuser,
};
