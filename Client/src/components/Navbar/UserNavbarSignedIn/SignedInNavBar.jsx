import React, { useContext, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './SINavbar.css';
import { AuthContext } from '../../../context/authContext/AuthContext';
import logo from "../../Images/logo.png";

function SINavbar({ cartItemCount }) {
    const { user } = useContext(AuthContext);

    const MenuItems = [
        {
            title: 'Shop',
            url: '/Store',
            cName: 'nav-links'
        },
        {
            title: 'Tailor',
            url: '/Tailor',
            cName: 'nav-links'
        },
        {
            title: user.firstName,
            url: '/Profile',
            cName: 'nav-links'
        },
        {
            title: 'Orders',
            url: '/Orders',
            cName: 'nav-links'
        },
        {
            title: (
                <>
                    <span className="cart-item-count">{cartItemCount > 0 && '+'}{cartItemCount}</span>
                    <FaShoppingCart className="cart-icon" />
                </>
            ),
            url: '/Cart',
            cName: 'nav-links'
        }
    ];

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className='NavbarItems'>
            <a href={'/'}><img src={logo} alt="Logo" className='logo' /></a>
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

export default SINavbar;