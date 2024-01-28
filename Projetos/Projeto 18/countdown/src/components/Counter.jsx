import React from 'react'

import './Counter.css'

export const Counter = ({title, number, eventColor}) => {
  return (
    <div className='counter'>
        <p className="counter-number" style={{backgroundColor: eventColor}}>{number}</p>
        <h3 className='counter-text' style={{color: eventColor}}>{title}</h3>
    </div>
  )
}
