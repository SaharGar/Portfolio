import React from 'react'
import { Routes, Route } from 'react-router'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'


export const RootCmp = () => {
    return (
        <div className='app'>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </main>
        </div>
    )
}
