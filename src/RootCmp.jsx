import React from 'react'
import { Routes, Route } from 'react-router'
import { Footer } from './cmps/Footer'
import { Header } from './cmps/Header'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'


export const RootCmp = () => {
    return (
        <div className='app flex column'>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}
