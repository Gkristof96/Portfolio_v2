import React from 'react'
import SkillBar from './SkillBar'

const Skills = () => {
    return (
        <>
            <section className='skills section' id='skills'>
                <div className='skills-container'>
                    <img className='vector' src='images/vectors/vector_6.svg' alt='vector' />
                    <div className='skills-content'>
                        <div className='leftbar'>
                            <h1>Skills</h1>
                            <h2>Mit tudok én</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <div className='rightbar'>
                            <SkillBar title={'Html'} percent={'90%'}></SkillBar>
                            <SkillBar title={'Css'} percent={'70%'}></SkillBar>
                            <SkillBar title={'Sass'} percent={'60%'}></SkillBar>
                            <SkillBar title={'Javascript'} percent={'60%'}></SkillBar>
                            <SkillBar title={'React'} percent={'65%'}></SkillBar>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
