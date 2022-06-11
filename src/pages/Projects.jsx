import React, { useEffect } from 'react'
import { ProjectsList } from '../cmps/ProjectsList'

export const Projects = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className='projects-page flex column align-center'>
            <h1 className='page-title'>My Projects</h1>
            <ProjectsList/>
        </div>
    )
}
