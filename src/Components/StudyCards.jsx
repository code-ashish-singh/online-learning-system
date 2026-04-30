import React from 'react'
import './CSS/StudyCards.css'
import { Link } from 'react-router-dom'
const StudyCards = ({srcUrl,title,duration,lesson,price,}) => {
  return (
     <>
         <div className="cards-details">
                <div className="img-div">
                        <img src={srcUrl} alt="" />
                </div>
                <p>{title}</p>
                <div className="time-lesson">
                    <div>{duration}</div>
                   <div> {lesson}</div>
                </div>
                <div className="price-enroll">
                    {price}
                    <Link to='#'>Enroll now</Link>
                </div>
         </div>
     </>
  )
}

export default StudyCards