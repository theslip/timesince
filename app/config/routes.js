/* eslint-env node, node */
'use strict'

var differenceController = require('../controllers/differenceController')

module.exports = function (router) {
  router.post('/difference', differenceController.getInputFromUser)

  router.get('/sitemap.xml', function (req, res) {
    res.header('Content-Type', 'application/xml')
    res.sendFile('sitemap.xml', {'root': 'app/views'})
  })

  router.get('/', function (req, res) {
    res.status(200)
    res.sendFile('index.html', {'root': 'app/views'})
  })

  router.use(function (req, res) {
    res.status(404)
    res.sendFile('404.html', {'root': 'app/views'})
  })
}
