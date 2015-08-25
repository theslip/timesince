/*eslint-env node, node */
'use strict';

var express = require('express');

var server = function server(port) {
  this.port = port;
  this.app = express();
  this.router = express.Router();
  this.initialize();
};

server.prototype.initialize = function initialize() {
  require('./config/serverConfig')(this.app);
  require('./config/routes')(this.router);
  this.app.use('/', this.router);
};

server.prototype.stop = function stop() {
  this.serverInstance.close();
};

server.prototype.start = function start() {
  this.serverInstance = this.app.listen(this.port);
};

module.exports = server;
