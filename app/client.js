import React from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { configureStore } from './redux/store'
import { render } from 'react-dom'
import { routes } from './routes'
import { syncHistoryWithStore } from 'react-router-redux'

if (process.env.NODE_ENV === 'development') {
  window.React = React
}

document.addEventListener('DOMContentLoaded', function domOnLoad () {
  document.removeEventListener('DOMContentLoaded', domOnLoad, false)
  fadeWebPageIn()
}, false)

const fadeWebPageIn = function fadeWebPageIn () {
  document.body.classList.add('visible')
}

const element = document.getElementById('content')
const store = configureStore(browserHistory, window.__initialState__)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  element
)
