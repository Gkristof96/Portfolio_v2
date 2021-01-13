import React from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import SideMenu from './SideMenu'

const Header = () => {
    return (
        <>
            <header>
                <Navbar />
                <div clasName='social-icons'>
                    <AiFillLinkedin />
                    <AiFillGithub />
                </div>
                <SideMenu />
            </header>
        </>
    )
}

export default Header
