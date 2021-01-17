import React from 'react'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    <li><a href='#about'>Rólam</a></li>
                    <li><a href='#projects'>Projektek</a></li>
                    <li><a href='#skills'>Készségek</a></li>
                    <li><a href='#contact'>Kapcsolat</a></li>
            </ul>
        </>
    )
}

export default SideMenu
