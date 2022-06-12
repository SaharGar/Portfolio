import React from 'react'

export const ProjectCard = ({ project }) => {
  return (
    <div className='project-card' style={{ backgroundImage: `url(${project.img})` }}>
      <div className="text-container flex column justify-center align-center">
        <h2 className='project-name'>{project.name}</h2>
        <ul className='tech-list flex justify-center align-center'>
          {project.mainTech.map(tech => <li key={tech} className='tech'>{tech}</li>)}
        </ul>
        <p className='project-desc'>{project.desc}</p>
        <a className='project-link' href={project.url}>Visit Website</a>
      </div>
    </div>
  )
}
