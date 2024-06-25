const Routine = require("../models/routine.js");

const addClassRoutine = async (req, res) => {
  try {
    let routine = await Routine.findOne();
    if (!routine) {
      routine = new Routine();
    }
    routine.class.push(req.body);
    await routine.save();

    res.status(201).json(routine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRoutine = async (req, res) => {
  try {
    const routines = await Routine.find().populate("class.periods.course");
    res.status(200).json(routines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  addClassRoutine,
  getRoutine,
};
