import React, { useState, useEffect } from 'react'
import HamburgerIcon from './HamburgerIcon'

const Navbar = ({isMenuOpen, handleOpen}) => {
    const [scroll, setScroll] = useState(false);

    const  changeNav = () => {
        if(window.scrollY >= 80) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
            <div className={`main-navbar ${(isMenuOpen || scroll) && 'open'}`}>
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
                    <HamburgerIcon handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
                </div>
            </div>
        </>
    )
}

export default Navbar