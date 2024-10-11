import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";
export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true, //открывать в браузере страницу с нашим
        historyApiFallback: true, //прокисировать забросы через index page | и чтобы не было Cannot GET /kakayto-page
        hot: true,
    };
}
