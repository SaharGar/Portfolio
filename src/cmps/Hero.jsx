import React from 'react'
import myPic from '../assets/img/me.jpg'

export const Hero = () => {
    return (
        <div className='hero'>
            <div className='about-container flex column align-center justify-center'>
                <div className='img-container'>
                    <img src={myPic} alt="Picture of Me" />
                </div>
                <div className="about">
                    <h1 className='name'>Sahar Gar-onne</h1>
                    <h2 className='title'>Full Stack Developer</h2>
                </div>
            </div>
        </div>
    )
}
