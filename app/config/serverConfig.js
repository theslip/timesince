/*eslint-env node, node */
'use strict';

var express = require('express');
var bodyParser = require('body-parser');

module.exports = function serverConfig(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use('/public', express.static('./public'));
  app.use('/bower_components', express.static('./bower_components'));
};
