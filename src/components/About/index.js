import React from 'react'
import SectionText from '../SectionText'

const About = ({data}) => {
    return (
        <>
            <section className='about section' id='about'>
                <div className='empty-container' />
                <div className='about-container'>
                    <img className='vector up' src='images/vectors/vector_2.svg' alt='vector' />
                    <img className='vector bottom' src='images/vectors/vector_3.svg' alt='vector' />
                    <div className='about-content'>
                        <div className='leftbar'>
                            <img src='me.jpg' alt='me' />
                        </div>
                        <div className='rightbar'>
                            <SectionText data={data}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
