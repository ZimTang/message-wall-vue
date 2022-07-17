const tagModel = require("../models/tag.model");
class TagService {
  async create(tagName) {
    const newTag = new tagModel({ name: tagName });
    await newTag.save();
    return tagName
  }

  async findAll() {
    return await tagModel.find({}).select('name');
  }
}

module.exports = new TagService();
