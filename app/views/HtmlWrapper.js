import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'

class HtmlWrapper extends React.Component {
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
          <link rel='stylesheet' type='text/css' href='/public/styles/site.css' />
          <link rel='icon' href='/public/favicon.ico' />
        </head>
        <body>
          <div id='content' dangerouslySetInnerHTML={{__html: content}}></div>
          <script type='text/javascript' src='/public/scripts/bundle.js'></script>
          <script dangerouslySetInnerHTML={{__html: `window.__initialState__=${serialize(store.getState())};`}} charSet='UTF-8'/>
        </body>
      </html>
    )
  }
}

export default HtmlWrapper
