import React from 'react'
import { projects } from '../projects'
import { ProjectCard } from './ProjectCard'

export const ProjectsList = () => {
  return (
    <div className='projects-list'>
        {projects.map(project => <ProjectCard key={project.name} project={project}/>)}
    </div>
  )
}
