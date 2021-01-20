import React from 'react'
import ContactCard from './ContactCard'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import SectionText from '../SectionText'

const Contact = ({data}) => {
    return (
        <>
            <section className='contact section' id='contact'>
                    <div className='container'>
                        <div className='leftbar'>
                            <ContactCard />
                        </div>
                        <div className='rightbar'>
                            <SectionText data={data}/>
                            <ul>
                                <li><FaEnvelope className='icon' />kristef.g@gmail.com</li>
                                <li><FaPhoneAlt className='icon' />+36 30 123 4567</li>
                                <li><FaMapMarkerAlt className='icon' />Zalaegerszeg, 8900</li>
                            </ul>
                        </div>
                    </div>
                <img className='vector' src='images/vectors/vector_7.svg' alt='vector' />
            </section>
        </>
    )
}

export default Contact
