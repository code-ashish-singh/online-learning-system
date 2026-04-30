import React from 'react'
import {NavLink} from 'react-router-dom'
import './CSS/Header.css'
const Header = () => {
  return (
    <>
        <div className="header-outer">
            <div className="header-logo">
              <img  className='img-box' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHWZQcnJnZsc5DMMeO3tOnDD2LshBrAb7itA&s" alt="" />
            </div>
            <div className="header-menu">
                <ul>
                  <li><NavLink className="navLinks" to='/'>Home</NavLink></li>
                  <li><NavLink className="navLinks" to='/about'>About</NavLink></li>
                  <li><NavLink className="navLinks" to='/contact'>Contact</NavLink></li>
                  <li><NavLink className="navLinks" to='/products'>Products</NavLink></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Header