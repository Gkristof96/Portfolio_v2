import React from 'react'
import Video from '../../videos/video.mp4'

const Hero = () => {
    return (
        <>
            <section className='hero section'>
                <div className='video-container'>
                    <video className='video' autoPlay loop muted src={Video} type='video/mp4'  />
                    <img className='vector up' src='images/vectors/vector_1.svg' alt='vector' />
                </div>
                <div className='hero-container'>
                    <h1>Üdvözöllek az oldalamon!</h1>
                    <h2>Az én nevem <span>Kristóf</span></h2>
                    <p>
                        Ezen az oldalon megismerhetsz hogy ki is vagyok, valamint láthatod néhány korábbi projektem.
                    </p>
                    <button>Bővebben</button>
                </div>
            </section>
        </>
    )
}

export default Hero
