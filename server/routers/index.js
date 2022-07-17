const fs = require("fs");

const useRoutes = function (app) {
  app.use("/message", require("./message.router"));
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    app.use(`/${file.substring(0, file.length - 10)}`, require(`./${file}`));
  });
};

module.exports = useRoutes;
