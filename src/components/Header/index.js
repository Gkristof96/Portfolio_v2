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
                <div className='social-icons'>
                    <AiFillLinkedin className='icon'/>
                    <AiFillGithub className='icon'/>
                </div>
            </header>
            <SideMenu handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
        </>
    )
}

export default Header
