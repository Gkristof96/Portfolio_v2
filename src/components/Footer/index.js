import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'
import { footerVariants } from '../../animations/animation'
import { Link } from 'react-scroll'
import { navData } from '../../data/nav'

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
                        <Link smooth={true} duration={500} spy={true} exact="true" to='hero' className='logo__brand'>
                            <h1>Kristof's Portfolio</h1>
                        </Link>
                        <ul>
                            {navData.map((data,i) => ( <li key={i}><Link smooth={true} duration={500} spy={true} exact="true" to={data.path}>{data.title}</Link></li>))}
                        </ul>
                    </div>
                    <div className='social-icons'>
                        <a href='https://www.facebook.com/kristof.gerencser/'><AiOutlineFacebook className='icon'/></a>
                        <AiOutlineTwitter className='icon'/>
                        <a href='https://www.instagram.com/ger_kristof/'><AiOutlineInstagram className='icon'/></a> 
                    </div>
                    <h1 className='copyright'>Copyright © Gerencsér Kristóf</h1>
                </motion.div>
            </footer>
        </>
    )
}

export default Footer
