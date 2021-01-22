import React from 'react'
import { FaTimes , FaEnvelope} from 'react-icons/fa' 

const Modal = ({modalOpen, handleOpen}) => {
    return (
        <>
            {modalOpen && <div className='modal'>
                <div className='message-container'>
                    <div className='content'>
                        <FaEnvelope className='envelope'/>
                        <FaTimes className='icon' onClick={handleOpen}/>
                        <h1>Köszönöm az üzenetet!</h1>
                        <p>Minél előbb válaszolni fogok rá.</p>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Modal