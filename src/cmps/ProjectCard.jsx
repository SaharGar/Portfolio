import React from 'react'

export const ProjectCard = ({ project }) => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${project.img})` }}>
      <div className="text-container flex column justify-center align-center">
        <h2 className='project-name'>{project.name}</h2>
          <p className='project-desc'>{project.desc}</p>
          <a className='project-link' href={project.url}>See Website</a>
      </div>
    </div>
  )
}
