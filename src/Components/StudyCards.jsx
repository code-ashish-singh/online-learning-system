import React from 'react'
import './CSS/StudyCards.css'
import { Link } from 'react-router-dom'
import {Clock4,BookOpen} from 'lucide-react'
const StudyCards = ({srcUrl,title,duration,lesson,price,}) => {
  return (
     <>
         <div className="cards-details">
                <div className="img-div">
                        <img src={srcUrl} alt="" />
                </div>
               <div className="content-div">
                    <p>{title}</p>
                <div className="time-lesson">
                    <div> <Clock4 color='red' /> {duration}</div>
                   <div> <BookOpen color='red' /> {lesson}</div>
                </div>
                <div className="price-enroll">
                   <span> {price}</span>
                    <Link to='#'>Enroll now</Link>
                </div>
               </div>
         </div>
     </>
  )
}

export default StudyCards