'use strict'

require('babel-core/register')
let Server = require('./app/server').default
let server = new Server()
server.start()
