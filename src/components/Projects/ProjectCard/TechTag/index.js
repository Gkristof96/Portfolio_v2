import React from 'react'

const TechTag = ({data}) => {
    return (
        <>
            <div className='tech-tag'>
                {data.icon}
                <h3>{data.name}</h3>
            </div>
        </>
    )
}

export default TechTag
