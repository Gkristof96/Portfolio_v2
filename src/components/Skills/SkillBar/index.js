import React from 'react'

const SkillBar = ({percent,title}) => {
    return (
        <>
            <div className='fullbar'>
                <div className='valuebar' style={{width: `${percent}`}}>
                    <h1 className='title'>{title}</h1>
                    <h2 className='percent'>{percent}</h2>
                </div>
            </div>
        </>
    )
}

export default SkillBar
