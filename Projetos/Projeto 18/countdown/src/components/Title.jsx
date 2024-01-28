import React from 'react'

import './Title.css'

export const Title = ({title, eventColor}) => {
  return (
    <div>
        <h1 className='title' style={{color: eventColor}}>{title}</h1>
    </div>
  )
}
