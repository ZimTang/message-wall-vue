const messageService = require("../services/message.service");

class MessageController {
  async create(req, res, next) {
    const data = await messageService.create(req.body);
    res.json({
      code: "200",
      msg: "创建成功",
      data,
    });
  }
  async findAll(req, res) {
    const { pageNum = 1, pageSize = 10 } = req.query;
    const data = await messageService.findAll(pageNum, pageSize);
    res.json({
      code: 200,
      msg: "查找成功",
      data,
    });
  }
}

module.exports = new MessageController();
