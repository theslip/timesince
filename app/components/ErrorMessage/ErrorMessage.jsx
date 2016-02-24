import React from 'react'
import HomeButton from './HomeButton'

class ErrorMessage extends React.Component {
  render () {
    const { error, home } = this.props
    return (
      <div>
        <div className='container'>
          <h1 className='error-heading'>
            <span className='red'>{error.text}</span>: {error.statusCode}
          </h1>
          <HomeButton home={home}/>
        </div>
      </div>
    )
  }
}

export default ErrorMessage
