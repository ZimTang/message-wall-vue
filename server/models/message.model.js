const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  creator: String,
  color: Number,
  message: String,
  tag: String,
  createTime: Date,
  stars: Number,
  comments: Array
});

const MessageModel = mongoose.model("message", messageSchema);

module.exports = MessageModel;
