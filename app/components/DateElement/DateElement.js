import React from 'react'

const DateElement = ({ date, getDate, disabled }) => {
  return (
    <div className='container'>
      <div className='date-heading'>Enter Your Date</div>
      <input type='text' className='ts-input' id='date' placeholder='e.g. 03/13/1993' onKeyDown={(event) => getDate(event)} autoFocus='true'/>
        <input id='difference' value={date} disabled={disabled}></input>
    </div>
  )
}

export default DateElement
