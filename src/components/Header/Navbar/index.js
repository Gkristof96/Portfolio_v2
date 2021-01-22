import React from 'react'
import HamburgerIcon from './HamburgerIcon'
import { motion } from 'framer-motion'
import { navData } from '../../../data/nav'
import { navbarVariants } from '../../../animations/animation'
import { Link } from 'react-scroll'

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <motion.div className={`main-navbar ${isMenuOpen && 'open'}`}
                variants={navbarVariants}
                initial='hidden'
                animate='visible'
            >
                <Link className='logo' smooth={true} duration={500} spy={true} exact="true" to='hero'>Kristof's Portfolio</Link>
                <nav>
                    <ul>
                        {navData.map((data,i) => ( <li key={i}><Link smooth={true} duration={500} spy={true} exact="true" to={data.path}>{data.title}</Link></li>))}
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