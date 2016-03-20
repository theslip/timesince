import webconfig from '../../webconfig'
import express from 'express'

export function Config (app) {
  app.disable('x-powered-by')
  app.use(webconfig.endpoints.scripts, express.static('./src/build/scripts'))
  app.use(webconfig.endpoints.styles, express.static('./src/build/styles'))
  app.use('/favicon', express.static('./src/public'))
}
