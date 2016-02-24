'use strict'

import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Router, Route, RouterContext, match } from 'react-router'
import Index from '../views/Index'
import Sitemap from '../components/Sitemap/Sitemap'
import { renderSitemap } from '../views/Sitemap'
import Error from '../views/Error'

const routes = (
  <Router>
    <Route path='/' component={Index} />
    <Route path='sitemap.xml' component={Sitemap}></Route>
    <Route path='*' component={Error} />
  </Router>
)

export function Routes (app) {
  app.get('*', (req, res) => {
    match({ routes: routes, location: req.url }, (err, redirect, props) => {
      if (err) { throw err }
      let html
      const routerContext = (<RouterContext {...props} />)
      const isRequestSitemap = (req.url === '/sitemap.xml')

      if (isRequestSitemap) {
        res.setHeader('Content-Type', 'text/xml')
        html = renderSitemap(renderToStaticMarkup(routerContext))
      } else {
        html = renderToString(routerContext)
      }
      res.send(html)
    })
  })
}
