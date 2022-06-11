import React, { useEffect, useState } from 'react'
import { projects } from '../projects'
import { ProjectPreview } from './ProjectPreview'

export const ProjectsPreviewList = () => {
  const pageSize = 3
  const [currPageIdx, setCurrPageIdx] = useState(0)
  const [projectsToRender, setProjectsToRender] = useState(null)

  useEffect(() => {
    setProjectsToRender(setProjectsForDisplay(currPageIdx))
  }, [currPageIdx])

  const setProjectsForDisplay = (pageIdx) => {
    const startIdx = pageIdx * pageSize
    return projects.slice(startIdx, startIdx + pageSize)
  }

  const setPage = (diff) => {
    if (currPageIdx + diff < 0) setCurrPageIdx(Math.floor(projects.length / pageSize))
    else if (currPageIdx + diff > Math.floor(projects.length / pageSize)) setCurrPageIdx(0)
    else setCurrPageIdx(prevIdx => prevIdx + diff)
  }

  if (!projectsToRender) return <h1>Loading...</h1>
  return (
    <div className="projects-preview-list-container flex align-center justify-center">
      <button className='page-btn' onClick={() => setPage(-1)}>	&lt;</button>
      <div className='projects-preview-list flex'>
        {projectsToRender.map(project => <ProjectPreview key={project.name} project={project} />)}
      </div>
      <button className='page-btn' onClick={() => setPage(1)}>	&gt;</button>
    </div>
  )
}
