import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import SideMenu from './SideMenu'
import {motion} from 'framer-motion'

const iconAnimation = {
    hidden: {
        opacity: 0,
        y: '-100px'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1
        }
    }
}

const Header = () => {
    const [isMenuOpen,setMenuOpen] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleOpen = () => setMenuOpen(!isMenuOpen)

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
            <header className={`${(isMenuOpen || scroll) && 'scroll'}`}>
                <Navbar handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
                <motion.div className='social-icons'
                    variants={iconAnimation}
                    initial='hidden'
                    animate='visible'
                >
                    <AiFillLinkedin className='icon'/>
                    <AiFillGithub className='icon'/>
                </motion.div>
            </header>
            <SideMenu handleOpen={handleOpen} isMenuOpen={isMenuOpen}/>
        </>
    )
}

export default Header
