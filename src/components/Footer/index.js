import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

const footerVariants = {
    hidden: {
        y: -25,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const Footer = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
    }, [controls, inView]);
    return (
        <>
            <footer ref={ref}>
                <motion.div variants={footerVariants} initial='hidden' animate={controls} className='container'>
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
                    <h1 className='copyright'>Copyright © Gerencsér Kristóf</h1>
                </motion.div>
            </footer>
        </>
    )
}

export default Footer
