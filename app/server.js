'use strict'

let express = require('express')

let startServer = function server (port) {
  let app = express()
  let router = express.Router()
  let serverInstance

  let initialize = function initialize () {
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
