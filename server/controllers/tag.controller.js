const tagService = require("../services/tag.service");

class TagController {
  async create(req, res) {
    const data = await tagService.create(req.body.tagName);
    res.json({
      code: 200,
      msg: "创建成功",
      data,
    });
  }

  async findAll(req, res) {
    const data = await tagService.findAll();
    data.unshift({ name: "全部" });
    res.json({
      code: 200,
      msg: "查找成功",
      data,
    });
  }
}

module.exports = new TagController();
