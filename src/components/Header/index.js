import React, { useState } from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import SideMenu from './SideMenu'

const Header = () => {
    const [isMenuOpen,setMenuOpen] = useState(false)

    const handleOpen = () => setMenuOpen(!isMenuOpen)
    return (
        <>
            <header>
                <Navbar handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
                <div clasName='social-icons'>
                    <AiFillLinkedin />
                    <AiFillGithub />
                </div>
                <SideMenu handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
            </header>
        </>
    )
}

export default Header
