'use strict'

import express from 'express'

export function config (app) {
  app.disable('x-powered-by')
  app.use('/public', express.static('./public'))
}
