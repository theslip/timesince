import webconfig from '../webconfig'
import express from 'express'
import { Parser } from './config/Parser'
import { Config } from './config/Config'
import { Routes } from './config/Routes'
import http from 'http'

class Server {
  constructor () {
    this.port = webconfig.port
    this.app = express()
    this.parser = Parser(this.app)
    this.config = Config(this.app)
    this.router = Routes(this.app)
  }
  start () {
    this.serverInstance = http.createServer(this.app).listen(this.port)
  }
  stop () {
    this.serverInstance.close()
  }
}

export default Server
