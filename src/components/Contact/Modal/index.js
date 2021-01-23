import React from 'react'
import { FaTimes , FaEnvelope} from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import { modalVariants, messageVariants } from '../../../animations/animation'

const Modal = ({modalOpen, handleOpen}) => {
    return (
        <>
            <AnimatePresence exitBeforeEnter>
                {modalOpen && <motion.div variants={modalVariants} initial='hidden' animate='visible' exit='hidden' className='modal'>
                    <motion.div variants={messageVariants} initial='hidden' animate='visible' exit='hidden' className='message-container'>
                        <div className='content'>
                            <FaEnvelope className='envelope'/>
                            <FaTimes className='icon' onClick={handleOpen}/>
                            <h1>Köszönöm az üzenetet!</h1>
                            <p>Minél előbb válaszolni fogok rá.</p>
                        </div>
                    </motion.div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}

export default Modal