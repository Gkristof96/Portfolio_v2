import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar'
import SectionText from '../SectionText'
import { skillsData } from '../../data/skills'

const Skills = ({data}) => {
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
            <section ref={ref} className='skills section' id='skills'>
                <div className='container'>
                    <img className='vector' src='images/vectors/vector_6.svg' alt='vector' />
                    <div className='skills-content'>
                        <div className='leftbar'>
                            <SectionText data={data} controls={controls}/>
                        </div>
                        <div className='rightbar'>
                            {skillsData.map((data,i) => ( <SkillBar controls={controls} key={i} title={data.title} percent={data.percent} />))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
