const path = require("path");

module.exports = {
  mode: "development", //development на этапе разработки
  entry: path.resolve(__dirname, "src", "index.js"), //стартовая точка нашего приложения | __dirname пака где мы сейчас находимся
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"), //главный файл сборки нашего приложения
  }, //куда мы будем делать сборку нашего приложения
};
//6 40
