import React from 'react'
import { navData} from '../../../data/nav'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    {navData.map((data,i) => ( <li><a href={data.path}>{data.title}</a></li>))}
            </ul>
        </>
    )
}

export default SideMenu
