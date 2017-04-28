"use strict";
let webpack = require('webpack');
let webpackDevServer = require("webpack-dev-server");
let ip = require('ip');
let localIp = ip.address();
let config = require("./webpack.config.js");
let compiler = webpack(config);
let server = new webpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
//    quiet: true,
});
server.listen(process.env.npm_package_config_port, process.env.npm_package_config_ip, function (err, result) {
    err && console.log(err);
    console.log('Listening at localhost:'+process.env.npm_package_config_port);
});
