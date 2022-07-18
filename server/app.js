const express = require("express");

const app = express();
const cors = require("./middlewares/cors");
const connectDB = require("./middlewares/db");

const useRoutes = require("./routers/index");

app.connectDB = connectDB;

app.all("*", cors);
app.use(express.json());
app.connectDB();
useRoutes(app);

app.listen(3010, () => {
  console.log("服务器启动成功");
});
