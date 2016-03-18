import React from 'react'

const DateElement = ({ date, getDate }) => {
  return (
    <div className='container'>
      <div className='date-heading'>Enter Your Date</div>
      <input type='text' className='ts-input' id='date' placeholder='e.g. 03/13/1993' onKeyDown={(event) => getDate(event)} autoFocus='true'/>
      <div id='difference'>
        {date.map((value, index) =>
          <span key={index} className='unit'>
            { Object.values(value) + ' ' + Object.keys(value) + `${date.length - 1 !== index ? ', ' : ''}` }
          </span>)}
      </div>
    </div>
  )
}

export default DateElement
