import React,{ useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'
import ProjectCard from './ProjectCard'
import { projectData } from '../../data/projects';

const Projects = () => {
    const [current,setCurrent] = useState(0)

    const handleLeftClick = () => {
        current === 0 ? setCurrent(-445 * (3 - 1)) : setCurrent(current + 445);
      };
      // jobbra léptető függvény 680-al lép jobbra ha nem az utolsó elemnél vagyunk
    const handleRightClick = () => {
        current === -445 * (3 - 1) ? setCurrent(0) : setCurrent(current - 445);
    };
    return (
        <>
            <section className='projects section' id='projects'>
                <div className='projects-container'>
                    <img className='vector up' src='vector_4.svg' alt='vector' />
                    <img className='vector bottom' src='vector_5.svg' alt='vector' />
                    <div className='project-content'>
                        <div className='leftbar'>
                            {/*<div className='card-slider' style={{ transform: `translateX(${current}px)` }}>
                                {projectData.map((data,i) => <ProjectCard data={data} key={i}/>)}
                            </div>*/}
                        </div>
                        <div className='rightbar'>
                            <h1>Projektek</h1>
                            <h2>Eddigi projektjeim</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
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
