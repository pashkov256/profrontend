import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  //если не используем ts то нужен babel-loader

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: true, //модульный css | изоляция стилей
          auto: (resPath: string) => Boolean(resPath.includes(".module.")),
          localIdentName: isDev
            ? "[path][name]__[local]--[hash:base64:5]"
            : "[hash:base64:8]",
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    //обработка файлов которые выходят за рамки js
    test: /\.tsx?$/, //файлы ts и tsx
    use: "ts-loader", //позволяет работать typescriptyy
    exclude: /node_modules/, //исключаем эту папку
  };

  return [typescriptLoader, cssLoader];
}
