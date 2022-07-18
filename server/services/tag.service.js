const TagModel = require("../models/tag.model");

class TagService {
  async create(tagName) {
    const newTag = new TagModel({ name: tagName });
    await newTag.save();
    return tagName;
  }

  async findAll() {
    const data = await TagModel.find({}).select("name");
    return data
  }
}

module.exports = new TagService();
