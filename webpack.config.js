const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const devServer = (isDev) => isDev && {
    port: 3000,
    open: true,
    hot: true,
    watchFiles: '[./src/*]',
}


module.exports = ({ develop }) => ({
    mode: develop ? 'development' : 'production',
    entry: {
        index: path.resolve(__dirname, "src/js/index.js"),
        catalog: path.resolve(__dirname, "src/js/catalog.js"),
        program: path.resolve(__dirname, "src/js/program.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[id].[hash:8].js',
        assetModuleFilename: 'media/[name][hash][ext][query]',
        clean: develop ? false : true,
    },
    plugins: [
        new HtmlWebpackPlugin({ 
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'), 
            chunks: ['index'],
         }),
        new HtmlWebpackPlugin({ 
            filename: 'catalog.html',
            template: path.resolve(__dirname, 'src/catalog.html'), 
            chunks: ['catalog'],
        }),
        new HtmlWebpackPlugin({ 
            filename: 'program.html',
            template: path.resolve(__dirname, 'src/program.html'), 
            chunks: ['program'],
        }),
        new MiniCssExtractPlugin({ filename: develop ? 'css/main.css' : 'css/[name].[contenthash:8].css' }),
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
})