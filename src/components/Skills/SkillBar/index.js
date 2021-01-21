import React from 'react'
import { motion } from 'framer-motion'

const valuebarVariants = {
    hidden: {
        x: '-500px',
    },
    visible: {
        x: 0,
        transition: {
            delay: 0.75,
            duration: 2
        }
    }
}
const fullbarVariants = {
    hidden: {
        y: 50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
}

const textVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2.75
        }
    }
}

const SkillBar = ({percent,title, controls}) => {
    return (
        <>
            <motion.div variants={fullbarVariants} initial='hidden' animate={controls} className='fullbar'>
                <motion.div variants={valuebarVariants} initial='hidden' animate={controls} className='valuebar' style={{width: `${percent}`}}>
                    <motion.h1 variants={textVariants} initial='hidden' animate={controls} className='title'>{title}</motion.h1>
                    <motion.h2 variants={textVariants} initial='hidden' animate={controls} className='percent'>{percent}</motion.h2>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SkillBar
