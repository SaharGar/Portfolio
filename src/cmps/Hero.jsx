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
                    <h1>Sahar Gar-onne</h1>
                    <h2>Full Stack Developer</h2>
                    <div className='info'>
                        <p>
                            Full-Stack/Frontend Web Developer with a passion and
                            knowledge in writing single-page-applications using the latest
                            WEB technologies
                        </p>
                        <h4>Technologies:</h4>
                        <ul className='clean-list'>
                            <li>Javascript, Typescript, Node.JS</li>
                            <li>MVC Frameworks, REST API</li>
                            <li>React.JS, Vue + Vuex, Redux + Thunk</li>
                            <li>Web Sockets</li>
                            <li>MongoDB</li>
                            <li>HTML5, CSS3 + Sass</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
