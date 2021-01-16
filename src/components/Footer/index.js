import React from 'react'
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='logo'>
                        <a href='#hero' className='logo__brand'>
                            <h1>Kristof's Portfolio</h1>
                        </a>
                        <ul>
                          <li><a href='#about'>About</a></li>
                          <li><a href='#projects'>Projects</a></li>
                          <li><a href='#skills'>Skills</a></li>
                          <li><a href='#contact'>Contact</a></li>
                        </ul>
                    </div>
                    <div className='social-icons'>
                        <AiOutlineFacebook className='icon'/>
                        <AiOutlineTwitter className='icon'/>
                        <AiOutlineInstagram className='icon'/>
                    </div>
                    <h1 className='copyright'>Copyright © Cross Gym</h1>
                </div>
            </footer>
        </>
    )
}

export default Footer
