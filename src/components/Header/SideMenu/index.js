import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <nav className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                <ul>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default SideMenu
