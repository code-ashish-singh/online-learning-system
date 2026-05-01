import React from 'react'
import './CSS/MeetCard.css'

const MeetCard = ({src,name,dignation}) => {
  return (
    <>
      <div className='meet-card'>
            <img src={src} alt="" />
            <h1>{name}</h1>
            <h4>{dignation}</h4>
      </div>
    </>
  )
}

export default MeetCard