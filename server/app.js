const express = require("express");
const app = express();
const cors = require("./middlewares/cors");
const connectDB = require("./middlewares/db");
const useRoutes = require('./routers/index')
app.connectDB = connectDB

app.use(express.json());
app.connectDB()
useRoutes(app);
app.all("*", cors);

app.listen(3010, () => {
  console.log("服务器启动成功");
});
