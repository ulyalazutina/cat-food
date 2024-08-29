const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devServer = (isDev) => isDev && {
    port: 3000,
    open: true,
    hot: true,
    watchFiles: '[./src/*]',
}

module.exports = ({develop}) => ({
    mode: develop ? 'development' : 'production',
    entry: path.resolve(__dirname, "src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash:8].js',
        clean: develop ? false : true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')}),
        new MiniCssExtractPlugin({filename: develop ? 'css/main.css' : 'css/[name].[contenthash:8].css'}),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(?:png, jpg, jpeg, svg)$/i,
                type: 'asset',
                generator: {
                    filename: 'img/[hash][ext][query]'
                },
            },
            {
                test: /\.sass$/i,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
    ...devServer,
});