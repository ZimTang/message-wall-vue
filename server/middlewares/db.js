const mongoose = require("mongoose");

module.exports = function (app) {
  mongoose.connect("mongodb://localhost/message-wall");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function () {
    console.log("数据库连接成功");
  });
};
