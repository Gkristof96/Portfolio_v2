import React from 'react'

const HamburgerIcon = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <button className={`toggle-button ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                <div className='line' />
                <div className='line' />
                <div className='line' />
            </button>
        </>
    )
}

export default HamburgerIcon
