import React from 'react'
import HamburgerIcon from './HamburgerIcon'

const Navbar = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <div className={`main-navbar ${isMenuOpen && 'open'}`}>
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
            </div>
        </>
    )
}

export default Navbar