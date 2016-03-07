import React from 'react'
import { renderToString } from 'react-dom/server'
import { syncHistoryWithStore } from 'react-router-redux'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { isRouteActive } from './utils/routeUtils'
import { routes } from './routes'
import HtmlWrapper from './views/HtmlWrapper'
import { Provider } from 'react-redux'
import { configureStore } from './redux/store'

const docType = '<!doctype html>\n'

export function SitemapRoute (req, res) {
  res.set('Content-Type', 'text/xml')
  res.sendFile('./views/sitemap.xml', { root: __dirname })
}

export function RouteHandler (app) {
  app.use((req, res) => {
    const memoryHistory = createMemoryHistory(req.url)
    const store = configureStore(memoryHistory)
    const history = syncHistoryWithStore(memoryHistory, store)
    match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        console.error('Router error:', error)
        res.status(500).send(error.message)
      } else {
        if (isRouteActive(renderProps, '*')) { res.status(404) }
        const component = (
          <Provider store={store}>
            <RouterContext {...renderProps}/>
          </Provider>
        )
        const content = (<HtmlWrapper store={store} component={component} />)
        const html = docType + renderToString(content)

        res.send(html)
      }
    })
  })
}
