// export function renderError (html) {
//   return `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>Error: 404</title>
//         <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
//         <link rel='stylesheet' type='text/css' href='public/styles/errorpage.css' />
//         <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300' rel='stylesheet' type='text/css' />
//         <link href='http://fonts.googleapis.com/css?family=Raleway|Open+Sans+Condensed:300|Quicksand' rel='stylesheet' type='text/css' />
//       </head>
//       <body>
//         ${html}
//       </body>
//     </html>
//   `
// }

import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

class Error extends React.Component {
  static propTypes = {
    errorText: PropTypes.string,
    statusCode: PropTypes.string,
    home: PropTypes.object
  }
  static defaultProps = {
    error: {
      statusCode: '404',
      text: 'Not Found'
    },
    home: {
      text: 'here',
      href: '/'
    }
  }
  render () {
    const head = Helmet.rewind()
    const { error, home } = this.props
    return (
      <html>
        <head>
          <title>{error.text + ': ' + error.statusCode}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
          <link rel='stylesheet' type='text/css' href='public/styles/errorpage.css' />
        </head>
        <body>
          <ErrorMessage error={error} home={home} />
        </body>
      </html>
    )
  }
}

export default Error
