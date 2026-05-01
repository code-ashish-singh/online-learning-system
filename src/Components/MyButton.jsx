import React, { useState } from 'react'

const MyButton = ({text,handleClick ,style}) => {
    const [hover , setHover] = useState(false)
    const boxStyle = {
            padding : "10px 20px",
            background : hover ? style.hoverBgColor : style.bg,
            border : style.border,
            fontWeight : 600,
            color : hover ?  style.hoverColor   :  style.color ,
            borderRadius : "4px "
    }
    console.log(text)
  return (
    <>
            <button onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} onClick={handleClick} style={boxStyle} >{text}</button>
    </>
  )
}

export default MyButton