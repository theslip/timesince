import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import DateElement from '../components/DateElement/DateElement'

class Index extends React.Component {
  static propTypes = {
    date: PropTypes.string,
    headerText: PropTypes.string,
    placeholder: PropTypes.array,
    title: PropTypes.string
  }
  static defaultProps = {
    title: 'Timesince - A Date Calculator'
  }
  render () {
    const head = Helmet.rewind()
    const { title } = this.props
    return (
      <html>
        <head>
          <title>{title}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
          <link rel='stylesheet' type='text/css' href='public/styles/site.css' />
          <link rel='icon' href='public/favicon.ico' />
        </head>
        <body>
          <DateElement />
          <script type='text/javascript' src='public/scripts/bundle.js'></script>
        </body>
      </html>
    )
  }
}

export default Index
