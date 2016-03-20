import webconfig from '../webconfig'
import express from 'express'
import { Parser } from './config/parser'
import { Config } from './config/config'
import { RouteHandler, SitemapRoute } from './routeHandler'
import http from 'http'

export class Server {
  constructor () {
    this.port = webconfig.port
    this.app = express()
    this.app.use(webconfig.endpoints.sitemap, SitemapRoute)
    this.parser = Parser(this.app)
    this.config = Config(this.app)
    this.router = RouteHandler(this.app)
  }
  start () {
    this.serverInstance = http.createServer(this.app).listen(this.port)
  }
  stop () {
    this.serverInstance.close()
  }
}
