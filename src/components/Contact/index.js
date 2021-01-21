import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactCard from './ContactCard'
import SectionText from '../SectionText'
import ContactInfo from './ContactInfo'
import { contactData } from '../../data/contact'
import { containerVariants, cardVariants } from '../../animations/animation'

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
                                variants={containerVariants}
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
