import React from 'react'
import { NavLink,Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header flex align-center space-between'>
      <Link to='/'>My Portfolio</Link >
      <nav className="nav flex">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
      </nav>
    </div>
  )
}
