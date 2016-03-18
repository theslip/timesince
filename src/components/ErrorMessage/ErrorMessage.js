import React from 'react'
import HomeButton from './HomeButton'

const ErrorMessage = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='error-heading'>
          <span className='red'>Not Found</span>: 404
        </h1>
        <HomeButton />
      </div>
    </div>
  )
}

export default ErrorMessage
