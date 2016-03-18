import express from 'express'

export function Config (app) {
  app.disable('x-powered-by')
  app.use('/public/scripts', express.static('./src/.build/scripts'))
  app.use('/public/styles', express.static('./src/.build/styles'))
  app.use('/favicon', express.static('./src/public'))
}
