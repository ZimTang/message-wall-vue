const MessageModel = require("../models/message.model");

class MessageService {
  async create(message) {
    const newMessage = new MessageModel({ ...message });
    await newMessage.save();
    return newMessage;
  }

  async findAll(pageNum, pageSize) {
    return await MessageModel.find()
      .limit(pageSize)
      .skip((pageNum - 1) * pageSize);
  }
}

module.exports = new MessageService();
