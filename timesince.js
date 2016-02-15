'use strict'

require('babel-register')
let Server = require('./app/server').default
let server = new Server()

server.start()
