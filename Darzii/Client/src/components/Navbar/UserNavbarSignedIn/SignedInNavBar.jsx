import React, { useContext, useState } from 'react';
// import { MenuItems } from "./MenuItems"
import './SINavbar.css';
import { AuthContext } from '../../../context/authContext/AuthContext';


function SINavbar() {
    const { user } = useContext(AuthContext)

    const MenuItems = [
        {
            title: 'Shop',
            url: 'Store',
            cName: 'nav-links'
        },
        {
            title: 'Tailor',
            url: '#',
            cName: 'nav-links'
        },
        {
            title: 'ClothUI',
            url: 'ClothUI',
            cName: 'nav-links'
        },
        {
            title: 'About Us',
            url: '#',
            cName: 'nav-links'
        },

        {
            title: user.firstName,
            url: '/blank',
            cName: 'nav-links'
        }
    ];

    const [clicked, setCliked] = useState(false)

    const handleClick = () => {
        setCliked(!clicked);
    }

    return (
        <nav className='NavbarItems'>
            <a href={'/'}><h1 className='navbar-logo'>Darzii<i className='fab fa-accusoft'></i></h1></a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
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
};



export default SINavbar