'use strict'

let express = require('express')
let bodyParser = require('body-parser')

module.exports = function serverConfig (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.disable('x-powered-by')
  app.use('/public', express.static('./public'))
  app.use('/bower_components', express.static('./bower_components'))
}
