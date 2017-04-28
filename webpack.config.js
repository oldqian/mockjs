"use strict";
let path = require('path');
let fs = require('fs');
let webpack = require('webpack');
let ip = require('ip');
let localIp = ip.address();
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); //打开浏览器
module.exports = {
    devtool: "source-map",
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /node_modules|vue\/dist/,
            use: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['', '.js'],
    },
    plugins: [
        new OpenBrowserPlugin({
            url: 'http://localhost:8181'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"mork"'
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
