import React from 'react'
import ContactCard from './ContactCard'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
            <section className='contact section' id='contact'>
                <div className='contact-container'>
                    <img className='vector' src='images/vectors/vector_7.svg' alt='vector' />
                    <div className='contact-content'>
                        <div className='leftbar'>
                            <ContactCard />
                        </div>
                        <div className='rightbar'>
                            <h1>Kapcsolat</h1>
                            <h2>Írj egy üzenetet</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                            <ul>
                                <li><FaEnvelope className='icon' />kristef.g@gmail.com</li>
                                <li><FaPhoneAlt className='icon' />+36 30 123 4567</li>
                                <li><FaMapMarkerAlt className='icon' />Zalaegerszeg, 8900</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
