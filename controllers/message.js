const message = require("../models/message");

const createMessage = async (req, res) => {
  try {
    const newMessage = new message(req.body);
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  createMessage,
  getMessages,
};
