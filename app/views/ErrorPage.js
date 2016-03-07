import React, { Component } from 'react'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

class ErrorPage extends Component {
  componentDidMount () {
    document.body.style.backgroundColor = ' #ecf0f1'
  }
  componentWillUnmount () {
    document.body.style.backgroundColor = null
  }
  render () {
    return (
      <div id='error-page'>
        <ErrorMessage />
      </div>
    )
  }
}

export default ErrorPage
