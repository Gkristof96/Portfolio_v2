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
                <div className='empty-container' />
                <div className='about-container'>
                    <img className='vector up' src='images/vectors/vector_2.svg' alt='vector' />
                    <img className='vector bottom' src='images/vectors/vector_3.svg' alt='vector' />
                    <div  className='about-content'>
                        <motion.div  initial="hidden" animate={controls} variants={imageVariants} className='leftbar'>
                            <img src='me.jpg' alt='me' />
                        </motion.div>
                        <div className='rightbar'>
                            <SectionText data={data} controls={controls}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
