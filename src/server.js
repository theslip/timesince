import webconfig from '../webconfig'
import bodyParser from 'body-parser'
import express from 'express'
import { RouteHandler, SitemapRoute } from './routeHandler'
import http from 'http'

function applyMiddlware (app) {
  app.disable('x-powered-by')
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(webconfig.endpoints.sitemap, SitemapRoute)
  app.use(webconfig.endpoints.scripts, express.static('./src/build/scripts'))
  app.use(webconfig.endpoints.styles, express.static('./src/build/styles'))
  app.use('/favicon', express.static('./src/public'))
}

export class Server {
  constructor () {
    this.port = webconfig.port
    this.app = express()
    applyMiddlware(this.app)
    this.router = RouteHandler(this.app)
  }
  start () {
    this.serverInstance = http.createServer(this.app).listen(this.port)
  }
  stop () {
    this.serverInstance.close()
  }
}
