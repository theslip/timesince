import React, { PropTypes } from 'react'

const HomeButton = ({ home }) => {
  return (
    <div className ='error-text'>
      Click <span className='link'><a href={home.href}>{home.text}</a></span> to return home.
    </div>
  )
}

HomeButton.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string
}

export default HomeButton
