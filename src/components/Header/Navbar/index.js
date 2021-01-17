import React from 'react'
import HamburgerIcon from './HamburgerIcon'

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <div className={`main-navbar ${isMenuOpen && 'open'}`}>
                <a className='logo' href='/'>Kristof's Portfolio</a>
                <nav>
                    <ul>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>
                <div className='hamburger-icon'>
                    <HamburgerIcon handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
                </div>
            </div>
        </>
    )
}

export default Navbar