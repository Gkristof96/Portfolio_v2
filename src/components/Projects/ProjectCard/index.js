import React from 'react'

const ProjectCard = ({data}) => {
    return (
        <>
            <div className='project-card'>
                <img src={data.image} alt='project' />
                <p>{data.description}</p>
                <button>Az oldalra</button>
            </div>
        </>
    )
}

export default ProjectCard
