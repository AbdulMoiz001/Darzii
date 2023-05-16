import React from 'react'
import "./Dashboard.css"
import { FaChevronRight } from 'react-icons/fa'


const UsersInfo = [
    {
        title: 'Darzies',
        url: '/darzii',
        cName: 'card',
        total: 50,
    },
    {
        title: 'Riders',
        url: '/rider',
        cName: 'card',
        total: 60,
    },
    {
        title: 'Warehoue Managers',
        url: '/wh-manager',
        cName: 'card',
        total: 70,
    }
]


function Dashboard() {
    return (
        <>
            <div className='DashboardBox'>
                <div className='orders card'>
                    Total Sales
                </div>

                <div className='orders card'>
                    Orders
                </div>

                {UsersInfo.map((item, index) => {
                    return (
                        <div className={item.cName} key={index}>
                            <div className='itemTitle'>
                                <p> Total&nbsp;{/*space*/}
                                    {item.title}
                                </p>
                            </div>
                            <div className='Nitem'>
                                {item.total}

                                <div className='viewitem'><a href={item.url}>View More  <FaChevronRight /></a></div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Dashboard