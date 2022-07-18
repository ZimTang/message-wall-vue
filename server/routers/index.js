const fs = require("fs");

const useRoutes =  (app) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === "index.js") return;
    // eslint-disable-next-line import/no-dynamic-require, global-require
    app.use(`/${file.substring(0, file.length - 10)}`, require(`./${file}`));
  });
};

module.exports = useRoutes;
