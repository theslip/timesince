/*eslint-env node, node */
'use strict';

var Server = require('./app/server');
var server = new Server(3000);
server.start();
