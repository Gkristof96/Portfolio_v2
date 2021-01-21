import React from 'react'
import { navData} from '../../../data/nav'
import { Link } from 'react-scroll'

const SideMenu = ({isMenuOpen, handleOpen}) => {
    return (
        <>
            <ul className={`sidemenu ${isMenuOpen && 'open'}`} onClick={handleOpen}>
                    {navData.map((data,i) => ( <li key={i}><Link smooth={true} duration={500} spy={true} exact="true" to={data.path} onClick={handleOpen}>{data.title}</Link></li>))}
            </ul>
        </>
    )
}

export default SideMenu
