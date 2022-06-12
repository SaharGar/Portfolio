import React from 'react'
import myPic from '../assets/img/me.jpg'
import Typewriter from 'typewriter-effect';


export const Hero = () => {
    return (
        <div className='hero'>
            <div className='about-container flex column align-center justify-center'>
                <div className='img-container'>
                    <img src={myPic} alt="Picture of Me" />
                </div>
                <div className="about">
                    <h1 className='name'>Sahar Gar-onne</h1>
                    <div className='title'>
                        <Typewriter
                            options={{
                                loop: true
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('full stack developer')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('experienced with the latest technologies')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('gaming enthusiast')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('anime aficionado')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('dogs lover')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start()
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
