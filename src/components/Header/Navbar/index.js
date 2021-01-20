import React from 'react'
import HamburgerIcon from './HamburgerIcon'
import { motion } from 'framer-motion'

const navbarAnimation = {
    hidden: {
        opacity: 0,
        y: '-100px'
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <motion.div className={`main-navbar ${isMenuOpen && 'open'}`}
                variants={navbarAnimation}
                initial='hidden'
                animate='visible'
            >
                <a className='logo' href='/'>Kristof's Portfolio</a>
                <nav>
                    <ul>
                        <li><a href='#about'>Rólam</a></li>
                        <li><a href='#projects'>Projektek</a></li>
                        <li><a href='#skills'>Készségek</a></li>
                        <li><a href='#contact'>Kapcsolat</a></li>
                    </ul>
                </nav>
                <div className='hamburger-icon'>
                    <HamburgerIcon handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
                </div>
            </motion.div>
        </>
    )
}

export default Navbar