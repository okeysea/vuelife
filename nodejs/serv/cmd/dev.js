'use strict'

const webpack = require('webpack');
const devWebpackConfig = require('../conf/dev');
const WebpackDevServer = require('webpack-dev-server');

const devServerOptions = devWebpackConfig.devServer;
const compiler = webpack(devWebpackConfig);
const server = new WebpackDevServer(devServerOptions, compiler);
const protocol = devServerOptions.https ? 'https' : 'http';
const host = devServerOptions.host || '0.0.0.0';
const port = devServerOptions.port || 8080;

compiler.hooks.done.tap('serve', (stats) => {
  if(stats.hasErrors()) return;

  console.log(`running: ${protocol}://${host}:${port}/`);
});

server.start(port, host, (err) => {
  if(err) process.exit(0);
});
