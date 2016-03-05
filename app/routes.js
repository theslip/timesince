'use strict'

import React from 'react'
import webconfig from './../webconfig'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import { Route, createMemoryHistory, match, RouterContext } from 'react-router'
import Index from './views/Index'
import Sitemap from './components/Sitemap/Sitemap'
import { renderSitemap } from './views/Sitemap'
import Error from './views/Error'
import HtmlWrapper from './views/HtmlWrapper'
import { Provider } from 'react-redux'
import { configureStore } from './redux/store'
import { isRouteActive, routeIsXml } from './utils/routeUtils'

const docType = '<!doctype html>\n'

export const routes = (
    <Route path='/' component={Index}>
      <Route path={webconfig.endpoints.sitemap} component={Sitemap} ext='xml'></Route>
      <Route path='*' component={Error} />
    </Route>
)

export function Routes (app) {
  app.use((req, res) => {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)
    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        console.error('Router error:', error)
        res.status(500).send(error.message)
      } else {
        if (routeIsXml(renderProps)) { res.setHeader('Content-Type', 'text/xml') }
        const isRequestSitemap = isRouteActive(renderProps, webconfig.endpoints.sitemap)
        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )
        const content = (<HtmlWrapper store={store} component={component} />)
        const html = isRequestSitemap ? renderSitemap(renderToStaticMarkup(component)) : docType + renderToString(content)

        res.send(html)
      }
    })
  })
}
