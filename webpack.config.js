const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const mode = process.env.NODE_ENV;
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: './src/index.js',
    devtool: devMode ? 'source-map' : false,
    mode: mode,
    output: {
        filename: './main.js',
        chunkFilename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        watchContentBase: true,
        progress: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        new CopyPlugin([
            {from: './src/index.html'},
        ])
    ],
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.(css|scss)$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    }
};
