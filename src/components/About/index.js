import React from 'react'

const About = () => {
    return (
        <>
            <section className='about section' id='about'>
                <div className='empty-container' />
                <div className='about-container'>
                    <img className='vector up' src='vector_2.svg' alt='vector' />
                    <img className='vector bottom' src='vector_3.svg' alt='vector' />
                    <div className='about-content'>
                        <div className='leftbar'>
                            <img src='me.jpg' alt='me' />
                        </div>
                        <div className='rightbar'>
                            <h1>Rólam</h1>
                            <h2>Ki vagyok én</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
