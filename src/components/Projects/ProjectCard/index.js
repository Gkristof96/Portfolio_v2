import React from 'react'


const ProjectCard = ({data}) => {
    return (
        <>
            <div className='project-card'>
                <img src={data.image} alt='project' />
                <p>{data.description}</p>
                <a href={data.path} rel="noreferrer" target='_blank'>Az oldalra</a>
            </div>
        </>
    )
}

export default ProjectCard
