import React,{ useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import SectionText from '../SectionText'
import { projectData } from '../../data/projects';

const Projects = ({data}) => {
    const [current,setCurrent] = useState(0)

    const handleLeftClick = () => {
        current === 0 ? setCurrent(-430 * (3 - 1)) : setCurrent(current + 430);
      };
      // jobbra léptető függvény 680-al lép jobbra ha nem az utolsó elemnél vagyunk
    const handleRightClick = () => {
        current === -430 * (3 - 1) ? setCurrent(0) : setCurrent(current - 430);
    };
    return (
        <>
            <section className='projects section' id='projects'>
                <div className='container'>
                    <img className='vector up' src='images/vectors/vector_4.svg' alt='vector' />
                    <img className='vector bottom' src='images/vectors/vector_5.svg' alt='vector' />
                    <div className='project-content'>
                        <div className='leftbar'>
                            <div className='card-slider' style={{ transform: `translateX(${current}px)` }}>
                                {projectData.map((data,i) => <ProjectCard data={data} key={i}/>)}
                            </div>
                        </div>
                        <div className='rightbar'>
                            <SectionText data={data}/>
                            <div className='pager'>
                                <FaCaretLeft className='icon' onClick={handleLeftClick}/>
                                <FaCaretRight className='icon' onClick={handleRightClick}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='empty-container' />
            </section>
        </>
    )
}

export default Projects
