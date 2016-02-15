'use strict'

import { Router } from 'express'
let router = Router()

export function routes (app) {
  router.get('/sitemap.xml', (req, res) => {
    res.header('Content-Type', 'application/xml')
    res.sendFile('sitemap.xml', {'root': 'app/views'})
  })

  router.get('/', (req, res) => {
    res.status(200)
    res.sendFile('index.html', {'root': 'app/views'})
  })

  router.use((req, res) => {
    res.status(404)
    res.sendFile('404.html', {'root': 'app/views'})
  })
  app.use('/', router)
}
