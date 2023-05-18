import React from 'react'
import "./Dashboard.css"
import { FaChevronRight } from 'react-icons/fa'
import axios from "axios"
import { useState } from 'react'
import { useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/authContext/AuthContext'



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

    const [totalOrders, setTotalOrders] = useState(0);


    const { user } = useContext(AuthContext);

    const accessToken = user.accessToken;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/order/getOrders",
                    {
                        headers: {
                            token: "Bearer " + accessToken,
                        },
                    });
                setTotalOrders(res.data);
            } catch (error) {
            }
        };

        fetchOrders();
    }, []);



    return (
        <>


            <div className='DashboardBox'>
                <div className='orders card'>
                    Total Sales
                </div>

                <div className='orders card'>
                    Orders
                    <div>
                        {totalOrders}
                    </div>
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