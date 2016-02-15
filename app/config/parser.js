'use strict'

import bodyParser from 'body-parser'

export function parser (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}
