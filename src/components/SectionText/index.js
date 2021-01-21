import React from 'react'
import { motion } from 'framer-motion'
import { titleVariants_1, desciptionVariants, textVariants } from '../../animations/animation' 

const SectionText = ({data, controls}) => {
    return (
        <>
            <motion.h1 initial="hidden" animate={controls} variants={titleVariants_1} className='title'>{data.title}</motion.h1>
            <motion.h2 initial="hidden" animate={controls} variants={desciptionVariants} className='description'>{data.description}</motion.h2>
            <motion.p  initial="hidden" animate={controls} variants={textVariants} className='text'>{data.text}</motion.p>
        </>
    )
}

export default SectionText
