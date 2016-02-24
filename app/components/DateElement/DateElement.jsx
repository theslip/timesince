import React from 'react'

class DateElement extends React.Component {
  render () {
    return (
      <div className='container'>
        <div className='date-heading'>Enter Your Date</div>
        <input type='text'className='ts-input' id='date' placeholder='e.g. 03/13/1993'></input>
        <input id='difference'></input>
      </div>
    )
  }
}

export default DateElement
