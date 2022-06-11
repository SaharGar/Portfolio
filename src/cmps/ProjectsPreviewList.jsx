import React, { useEffect, useState } from 'react'
import { projects } from '../projects'
import { ProjectPreview } from './ProjectPreview'

export const ProjectsPreviewList = () => {
  const [pageSize, setPageSize] = useState(null)
  const [currPageIdx, setCurrPageIdx] = useState(0)
  const [projectsToRender, setProjectsToRender] = useState(null)

  useEffect(() => {
    setProjectsToRender(setProjectsForDisplay(currPageIdx))
  }, [currPageIdx, pageSize])

  useEffect(() => {
    if (window.innerWidth >= 1120) setPageSize(3)
    else if (window.innerWidth >= 760) setPageSize(2)
    else setPageSize(1)
  }, [])

  const setProjectsForDisplay = (pageIdx) => {
    const startIdx = pageIdx * pageSize
    return projects.slice(startIdx, startIdx + pageSize)
  }

  const setPage = (diff) => {
    if (currPageIdx + diff < 0) setCurrPageIdx(Math.floor(projects.length / pageSize))
    else if (currPageIdx + diff > Math.floor(projects.length / pageSize)) setCurrPageIdx(0)
    else setCurrPageIdx(prevIdx => prevIdx + diff)
  }

  if (!projectsToRender || !pageSize) return <h1>Loading...</h1>
  return (
    <>
      <h2 className='projects-preview-headline'>Projects Preview</h2>
      <div className="projects-preview-list-container flex align-center justify-center">
        <button className='page-btn flex align-center justify-center' onClick={() => setPage(-1)}><span>&lt;</span></button>
        <div className='projects-preview-list flex'>
          {projectsToRender.map(project => <ProjectPreview key={project.name} project={project} />)}
        </div>
        <button className='page-btn flex align-center justify-center' onClick={() => setPage(1)}><span>&gt;</span></button>
      </div>
    </>
  )
}
