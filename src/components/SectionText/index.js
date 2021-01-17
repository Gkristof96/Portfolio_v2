import React from 'react'

const SectionText = ({data}) => {
    return (
        <>
            <h1 className='title'>{data.title}</h1>
            <h2 className='description'>{data.description}</h2>
            <p className='text'>{data.text}</p>
        </>
    )
}

export default SectionText
