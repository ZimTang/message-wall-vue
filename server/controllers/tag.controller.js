const tagService = require("../services/tag.service");

class TagController {
  async create(req, res, next) {
    const data = await tagService.create(req.body.tagName);
    res.json({
      code: "200",
      msg: "创建成功",
      data,
    });
  }

  async findAll(req, res, next) {
    const data = await tagService.findAll();
    res.json({
      code: "200",
      msg: "查找成功",
      data,
    });
  }
}

module.exports = new TagController();
