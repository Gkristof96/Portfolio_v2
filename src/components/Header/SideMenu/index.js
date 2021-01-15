import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <nav className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                <ul>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default SideMenu
