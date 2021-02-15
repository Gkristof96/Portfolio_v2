import React from 'react'
import { AiOutlineGlobal, AiOutlineGithub } from 'react-icons/ai'
import TechTag from './TechTag'


const ProjectCard = ({data}) => {
    return (
        <>
            <div className='project-card'>
                <img src={data.image} alt='project' />
                <div className='card-header'>
                    <h2>{data.name}</h2>
                    <div className='icon-links'>
                        <a href={data.deploy_link} target='_blank'><AiOutlineGlobal className='icon'/></a>
                        <a href={data.github_link} target='_blank'><AiOutlineGithub className='icon'/></a>
                    </div>
                </div>
                <p>{data.description}</p>
                <div className='tech-tags'>
                    {data.tech_tags.map((data,i) => <TechTag key={i} data={data} />)}
                </div>
            </div>
        </>
    )
}

export default ProjectCard
