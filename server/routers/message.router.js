const express = require("express");

const messageRouter = express.Router();
const { create, findAll, findByTag } = require("../controllers/message.controller");

messageRouter.post("/", create);
messageRouter.get("/", findAll);
messageRouter.get("/:tag",findByTag);

module.exports = messageRouter;
