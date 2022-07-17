const express = require("express");
const tagRouter = express.Router();
const { create, findAll } = require("../controllers/tag.controller");

tagRouter.post("/", create);
tagRouter.get('/', findAll)

module.exports = tagRouter;
