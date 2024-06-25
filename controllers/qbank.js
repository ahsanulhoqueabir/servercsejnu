const Qbank = require("../models/qBank.js");

const allQbank = async (req, res) => {
  try {
    const data = await Qbank.find(
      {},
      {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
      }
    ).populate("course");
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addQbank = async (req, res) => {
  try {
    const data = new Qbank(req.body);
    await data.save();
    res.status(200).json({ message: "Question Bank Added Successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = { allQbank, addQbank };
