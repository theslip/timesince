'use strict'

import webconfig from '../webconfig'
import express from 'express'
import { parser } from './config/parser'
import { config } from './config/config'
import { routes } from './config/routes'
import http from 'http'

class Server {
  constructor () {
    this.port = webconfig.port
    this.app = express()
    this.parser = parser(this.app)
    this.config = config(this.app)
    this.routes = routes(this.app)
  }
  start () {
    this.serverInstance = http.createServer(this.app).listen(this.port)
  }
  stop () {
    this.serverInstance.close()
  }
}

export default Server
