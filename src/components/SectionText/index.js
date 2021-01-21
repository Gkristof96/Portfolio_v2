import React from 'react'
import { motion } from 'framer-motion'

const titleVariants = {
    hidden: { y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.25
      }
    }
}
const descVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    }
}
const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.75
      }
    }
}

const SectionText = ({data, controls}) => {
    return (
        <>
            <motion.h1 initial="hidden" animate={controls} variants={titleVariants} className='title'>{data.title}</motion.h1>
            <motion.h2 initial="hidden" animate={controls} variants={descVariants} className='description'>{data.description}</motion.h2>
            <motion.p  initial="hidden" animate={controls} variants={textVariants} className='text'>{data.text}</motion.p>
        </>
    )
}

export default SectionText
