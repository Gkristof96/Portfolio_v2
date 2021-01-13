import React from 'react'
import HamburgerIcon from './HamburgerIcon'

const Navbar = () => {
    return (
        <>
            <div className='main-navbar'>
                <a href='/'>Kristof's Portfolio</a>
                <nav>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Skills</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </nav>
                <div className='hamburger-icon'>
                    <HamburgerIcon />
                </div>
            </div>
        </>
    )
}

export default Navbar