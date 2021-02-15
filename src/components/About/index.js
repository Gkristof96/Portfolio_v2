import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionText from '../SectionText'
import { imageVariants } from '../../animations/animation'
const About = ({data}) => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <>
            <section ref={ref} className='about section' id='about'>
                <div className='about-container'>
                    <img className='vector up' src='images/vectors/vector_4.svg' alt='vector' />
                    <img className='vector bottom' src='images/vectors/vector_5.svg' alt='vector' />
                    <div  className='about-content'>
                        <div className='leftbar'>
                            <SectionText data={data} controls={controls}/>
                        </div>
                        <motion.div  initial="hidden" animate={controls} variants={imageVariants} className='rightbar'>
                            <img src='me.jpg' alt='me' />
                        </motion.div>
                    </div>
                </div>
                <div className='empty-container' />
            </section>
        </>
    )
}

export default About
