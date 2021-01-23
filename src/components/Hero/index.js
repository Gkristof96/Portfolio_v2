import React from 'react'
import Video from '../../videos/video.mp4'
import { motion } from 'framer-motion'
import { titleVariants, descVariants, parVariants} from '../../animations/animation'

const Hero = () => {
    return (
        <>
            <section className='hero section' id='hero'>
                <div className='video-container'>
                    <video className='video' autoPlay loop muted src={Video} type='video/mp4'  />
                    <img className='vector up' src='images/vectors/vector_1.svg' alt='vector' />
                </div>
                <div className='hero-container'>
                    <motion.h1
                        variants={titleVariants}
                        initial='hidden'
                        animate='visible'
                    >Üdvözöllek az oldalamon!</motion.h1>
                    <motion.h2
                        variants={descVariants}
                        initial='hidden'
                        animate='visible'
                    >Az én nevem <span>Kristóf</span></motion.h2>
                    <motion.p
                        variants={parVariants}
                        initial='hidden'
                        animate='visible'
                    >
                        Ezen az oldalon megismerhetsz hogy ki is vagyok, valamint láthatod néhány korábbi projektem.
                    </motion.p>
                </div>
            </section>
        </>
    )
}

export default Hero
