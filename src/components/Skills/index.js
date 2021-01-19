import React from 'react'
import SkillBar from './SkillBar'
import SectionText from '../SectionText'

const Skills = ({data}) => {
    return (
        <>
            <section className='skills section' id='skills'>
                <div className='container'>
                    <img className='vector' src='images/vectors/vector_6.svg' alt='vector' />
                    <div className='skills-content'>
                        <div className='leftbar'>
                            <SectionText data={data}/>
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
