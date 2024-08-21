import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  //тип для config:webpack.Configuration для автокомплита
  const { paths, mode, isDev } = options;
  return {
    mode: mode, //development на этапе разработки
    entry: paths.entry, // entry стартовая точка нашего приложения | __dirname пака где мы сейчас находимся

    output: {
      filename: "[name].[contenthash].js",
      path: paths.build, //главный файл сборки нашего приложения
      clean: true, //очищать папку билда при повторной сборке
    }, //куда мы будем делать сборку нашего приложения
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined, //отслеживание ошибок в каком именно файле когда всё объеденилось  в один
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
