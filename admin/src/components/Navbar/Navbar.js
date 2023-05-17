import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
// import './Navbar.css';


const MenuItems = [
    {
        title: 'Home',
        url: '',
        cName: 'nav-links'
    },
    {
        title: 'Rider',
        url: 'rider',
        cName: 'nav-links'
    },
    {
        title: 'Darzii',
        url: 'darzii',
        cName: 'nav-links'
    },
    {
        title: 'WareHouse Manager',
        url: 'wareHouse',
        cName: 'nav-links'
    },

    {
        name: "Abdul",
        url: "/404",
        cName: "nav-linkd",
    }
]

function Navbar() {
    const [clicked, setCliked] = useState(false)

    const handleClick = () => {
        setCliked(!clicked);
    }

    return (
        <nav className='NavbarItems'>
            <a href={'/'}><h1 className='navbar-logo'>Darzii<i className='fab fa-accusoft'></i></h1></a>
            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    {clicked ? <GrClose /> : <FaBars />}
                </i>
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
}

export default Navbar