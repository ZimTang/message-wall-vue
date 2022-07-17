const express = require("express");
const messageRouter = express.Router();
const { create, findAll } = require("../controllers/message.controller");

messageRouter.post("/", create);
messageRouter.get("/", findAll);

module.exports = messageRouter;
