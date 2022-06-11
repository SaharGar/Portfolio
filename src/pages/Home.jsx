import React from 'react'
import { NavLink } from 'react-router-dom'
import { Hero } from '../cmps/Hero'
import { Info } from '../cmps/Info'
import { ProjectsPreviewList } from '../cmps/ProjectsPreviewList'

export const Home = () => {

  return (
    <div className='home-page'>
        <Hero/>
        <Info/>
        <ProjectsPreviewList/>
        <NavLink to='/projects'>See Projects</NavLink>
    </div>
  )
}
