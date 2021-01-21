import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const item = {
    hidden: { 
        x: '-20px', 
        opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1
    }
};

const ContactInfo = ({info, icon}) => {
    return (
        <>
            <motion.li 
                variants={item}
            >
            {icon}
            {info}
            </motion.li>
        </>
    )
}

export default ContactInfo
