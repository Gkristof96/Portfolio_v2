import React from 'react'
import { motion } from 'framer-motion'
import { itemVariants } from '../../../animations/animation'

const ContactInfo = ({info, icon}) => {
    return (
        <>
            <motion.li 
                variants={itemVariants}
            >
            {icon}
            {info}
            </motion.li>
        </>
    )
}

export default ContactInfo
