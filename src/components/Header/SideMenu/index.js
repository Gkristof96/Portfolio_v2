import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#contact'>Contact</a></li>
            </ul>
        </>
    )
}

export default SideMenu
