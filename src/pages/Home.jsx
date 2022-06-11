import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hero } from '../cmps/Hero'
import { ProjectsPreviewList } from '../cmps/ProjectsPreviewList'

export const Home = () => {

  return (
    <div className='home-page'>
        <Hero/>
        <ProjectsPreviewList/>
        <NavLink to='/projects'>See Projects</NavLink>
    </div>
  )
}
