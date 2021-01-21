import React from 'react'
import HamburgerIcon from './HamburgerIcon'
import { motion } from 'framer-motion'
import { navData } from '../../../data/nav'
import { navbarVariants } from '../../../animations/animation'

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <motion.div className={`main-navbar ${isMenuOpen && 'open'}`}
                variants={navbarVariants}
                initial='hidden'
                animate='visible'
            >
                <a className='logo' href='/'>Kristof's Portfolio</a>
                <nav>
                    <ul>
                        {navData.map((data,i) => ( <li><a href={data.path}>{data.title}</a></li>))}
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