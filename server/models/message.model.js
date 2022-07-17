const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  creator: String,
  color: Number,
  message: String,
  tag: String,
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;
