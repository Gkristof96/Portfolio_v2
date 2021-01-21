import React from 'react'
import { motion } from 'framer-motion'

const menu = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.3,
        }
    }
}

const menuItem = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
    }
}
const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <motion.ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}
                variants={menu}
                initial='hidden'
                animate='visible'
            >
                    <motion.li
                        variants={menuItem}
                    ><a href='#about'>Rólam</a></motion.li>
                    <motion.li
                        variants={menuItem}
                    ><a href='#projects'>Projektek</a></motion.li>
                    <motion.li
                        variants={menuItem}
                    ><a href='#skills'>Készségek</a></motion.li>
                    <motion.li
                        variants={menuItem}
                    ><a href='#contact'>Kapcsolat</a></motion.li>
            </motion.ul>
        </>
    )
}

export default SideMenu
