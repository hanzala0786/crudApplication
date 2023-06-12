import React from 'react'
import {NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        {/* nav links */}
        <nav>
          <ul className='navlist'>
            <li>
              <NavLink to="/">Form</NavLink>
            </li>
            <li>
              <NavLink to="/Table">Table</NavLink>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar