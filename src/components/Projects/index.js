import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import SectionText from '../SectionText'
import { projectData } from '../../data/projects';
import { cardVariants, pagerVariants } from '../../animations/animation'

const Projects = ({data}) => {
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

    const [current,setCurrent] = useState(0)

    const handleLeftClick = () => {
        current === 0 ? setCurrent(-430 * (projectData.length - 1)) : setCurrent(current + 430);
      };
      // jobbra léptető függvény 680-al lép jobbra ha nem az utolsó elemnél vagyunk
    const handleRightClick = () => {
        current === -430 * (projectData.length - 1) ? setCurrent(0) : setCurrent(current - 430);
    };
    return (
        <>
            <section ref={ref} className='projects section' id='projects'>
                <div className='empty-container' />
                <div className='container'>
                    <img className='vector up' src='images/vectors/vector_2.svg' alt='vector' />
                    <img className='vector bottom' src='images/vectors/vector_3.svg' alt='vector' />
                    <div className='project-content'>
                        
                        <div className='rightbar'>
                            <SectionText data={data} controls={controls}/>
                            <motion.div initial="hidden" animate={controls} variants={pagerVariants} className='pager'>
                                <FaCaretLeft className='icon' onClick={handleLeftClick}/>
                                <FaCaretRight className='icon' onClick={handleRightClick}/>
                            </motion.div>
                        </div>
                        <motion.div initial="hidden" animate={controls} variants={cardVariants} className='leftbar'>
                            <div className='card-slider' style={{ transform: `translateX(${current}px)` }}>
                                {projectData.map((data,i) => <ProjectCard data={data} key={i}/>)}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
