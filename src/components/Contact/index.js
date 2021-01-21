import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactCard from './ContactCard'
import SectionText from '../SectionText'
import ContactInfo from './ContactInfo'
import { contactData } from '../../data/contact'

const container = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.25,
        staggerChildren: 0.3,
        duration: 1
      }
    }
  };
  
  

const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.75
      }
    }
}
const Contact = ({data}) => {
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
            <section ref={ref} className='contact section' id='contact'>
                    <div className='container'>
                        <motion.div initial="hidden" animate={controls} variants={cardVariants} className='leftbar'>
                            <ContactCard />
                        </motion.div>
                        <div className='rightbar'>
                            <SectionText data={data} controls={controls}/>
                            <motion.ul
                                variants={container}
                                initial="hidden"
                                animate={controls}
                            >
                                {contactData.map((data,i) => ( <ContactInfo key={i} info={data.info} icon={data.icon} />))}
                            </motion.ul>
                        </div>
                    </div>
                <img className='vector' src='images/vectors/vector_7.svg' alt='vector' />
            </section>
        </>
    )
}

export default Contact
