var express               = require('express'),
    path                  = require('path');

var server = function server(port) {
  this.port = port;
  this.app = express();
  this.router = express.Router();
  this.initializeConfig();

};

server.prototype.initializeConfig = function initializeConfig() {
  require('./config/serverConfig')(this.app);
  require('./config/routes')(this.router);
  this.app.use('/', this.router);
};

server.prototype.destroy = function destroy() {
  this.serverInstance.close();
};

server.prototype.start = function start() {
  this.serverInstance = this.app.listen(this.port, function() {
    console.log("I'm sorry, Dave. I'm afraid I can't do that.");
  });
};

module.exports = server;
