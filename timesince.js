'use strict'

require('babel-core/register')
let Server = require('./src/server').Server
new Server().start()
