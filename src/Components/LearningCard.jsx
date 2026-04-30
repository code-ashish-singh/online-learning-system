import React, { useEffect } from 'react'
import './CSS/LearningCard.css'
const LearningCard = ({heading,para,ImgC}) => {
   
  return (
    <>
       <div className='Learning-div' >
          <div>
            {ImgC}
          </div>
          <div>
              
              <p>{heading}</p>
              <p>{para}</p>

          </div>
       </div>
    </>
  )
}

export default LearningCard