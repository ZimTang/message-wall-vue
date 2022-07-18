const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect("mongodb://localhost/message-wall");
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => {
    console.log("数据库连接成功");
  });
};
