import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    // если не используем ts то нужен babel-loader

    const babelLoader = {
        test: /\.(js|jsx|tsx )$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    ['i18next-extract'],
                    { locales: ['ru', 'en'], keyAsDefaultValue: true },
                ],
            },
        },
    };

    const cssLoader = buildCssLoader(isDev);

    const typescriptLoader = {
    // обработка файлов которые выходят за рамки js
        test: /\.tsx?$/, // файлы ts и tsx
        use: 'ts-loader', // позволяет работать typescriptyy
        exclude: /node_modules/, // исключаем эту папку
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }; // ТОЛЬКО SVG

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
