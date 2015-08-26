/* eslint-env node, node */
'use strict'

var express = require('express')

var startServer = function server (port) {
  var app = express()
  var router = express.Router()
  var serverInstance

  var initialize = function initialize () {
    require('./config/serverConfig')(app)
    require('./config/routes')(router)
    app.use('/', router)
    serverInstance = app.listen(port)
  }

  initialize()

  return {
    stop: function stop () {
      serverInstance.close()
    }
  }

}

module.exports = startServer
