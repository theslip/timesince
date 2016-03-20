import webconfig from '../../webconfig'
import React, { PropTypes, Component } from 'react'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'

const endpoints = {...webconfig.endpoints}
const bundleHref = webconfig.isProd ? endpoints.timesince : endpoints.webpack

export default class HtmlWrapper extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Timesince - A Date Calculator'
  }
  render () {
    const head = Helmet.rewind()
    const { title, component, store } = this.props
    const content = renderToString(component)
    return (
      <html>
        <head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
          <link rel='stylesheet' type='text/css' href={bundleHref + endpoints.styles + webconfig.cssName} />
          <link rel='icon' href='/favicon/favicon.ico' />
        </head>
        <body>
          <div id='content' dangerouslySetInnerHTML={{__html: content}}></div>
          <script type='text/javascript' src={bundleHref + webconfig.bundleName} charSet='UTF-8'></script>
          <script dangerouslySetInnerHTML={{__html: `window.__initialState__=${serialize(store.getState())};`}} charSet='UTF-8'/>
        </body>
      </html>
    )
  }
}
