const MessageModel = require("../models/message.model");

class MessageService {
  async create(message) {
    const newMessage = new MessageModel({ ...message, stars: 0, comments: [] });
    await newMessage.save();
    return newMessage;
  }

  async findAll(pageNum, pageSize) {
    const data = await MessageModel.find()
      .limit(pageSize)
      .skip((pageNum - 1) * pageSize);
    return data;
  }

  async findByTag(pageNum, pageSize, tag) {
    const data = await MessageModel.find({ tag })
      .limit(pageSize)
      .skip((pageNum - 1) * pageSize);
    return data;
  }
}

module.exports = new MessageService();
