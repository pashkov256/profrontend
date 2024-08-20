import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"], //те файлы которые при импорте мы не будем указывать расширения
  };
}
