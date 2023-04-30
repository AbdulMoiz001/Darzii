import React from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';
import './Sidebar.css';

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


function Sidebar() {
    const [clicked, setCliked] = useState(false)

    const handleClick = () => {
        setCliked(!clicked);
    }

    return (

        <nav className='SidebarItems'>

            <div className='menu-icon' onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}>
                    {clicked ? <GrClose /> : <FaBars />}
                </i>
            </div>
            <div className={clicked ? 'SidebarItemsBox active' : 'SidebarItemsBox'}>

                <a href={'/'}><h1 className={clicked ? 'navbar-logo active' : 'navbar-logo '}>SideBar<i className='fab fa-accusoft'></i></h1></a>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index} className='nav-items'>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar