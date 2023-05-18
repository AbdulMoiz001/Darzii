import React, { useState } from 'react';
import { MenuItems } from "./MenuItems";
import logo from "../../Images/logo.png";
import './Navbar.css';

function Navbar() {
    const [clicked, setCliked] = useState(false)

    const handleClick = () => {
        setCliked(!clicked);
    }
    
    return(
        <nav className='NavbarItems'>
            <a href={'/'}><img src={logo} alt="Logo" className='logo'/></a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item,index)=>{
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Navbar;