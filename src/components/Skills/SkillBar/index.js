import React from 'react'
import { motion } from 'framer-motion'
import { valuebarVariants, fullbarVariants, textVariants_2 } from '../../../animations/animation'

const SkillBar = ({percent,title, controls}) => {
    return (
        <>
            <motion.div variants={fullbarVariants} initial='hidden' animate={controls} className='fullbar'>
                <motion.div variants={valuebarVariants} initial='hidden' animate={controls} className='valuebar' style={{width: `${percent}`}}>
                    <motion.h1 variants={textVariants_2} initial='hidden' animate={controls} className='title'>{title}</motion.h1>
                    <motion.h2 variants={textVariants_2} initial='hidden' animate={controls} className='percent'>{percent}</motion.h2>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SkillBar
