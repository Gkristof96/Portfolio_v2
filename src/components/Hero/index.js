import React from 'react'
import Video from '../../videos/video.mp4'
import { motion } from 'framer-motion'


const titleAniamtion ={
    hidden: {
        opacity: 0,
        y: '100px',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1
        }
    }
}

const descAniamtion ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.1
        }
    }
}
const parAniamtion ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.2
        }
    }
}
const buttonAniamtion ={
    hidden: {
        opacity: 0,
        y: '100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1.3
        }
    }
}
const Hero = () => {
    return (
        <>
            <section className='hero section'>
                <div className='video-container'>
                    <video className='video' autoPlay loop muted src={Video} type='video/mp4'  />
                    <img className='vector up' src='images/vectors/vector_1.svg' alt='vector' />
                </div>
                <div className='hero-container'>
                    <motion.h1
                        variants={titleAniamtion}
                        initial='hidden'
                        animate='visible'
                    >Üdvözöllek az oldalamon!</motion.h1>
                    <motion.h2
                        variants={descAniamtion}
                        initial='hidden'
                        animate='visible'
                    >Az én nevem <span>Kristóf</span></motion.h2>
                    <motion.p
                        variants={parAniamtion}
                        initial='hidden'
                        animate='visible'
                    >
                        Ezen az oldalon megismerhetsz hogy ki is vagyok, valamint láthatod néhány korábbi projektem.
                    </motion.p>
                    <motion.button
                        variants={buttonAniamtion}
                        initial='hidden'
                        animate='visible'
                    >Bővebben</motion.button>
                </div>
            </section>
        </>
    )
}

export default Hero
