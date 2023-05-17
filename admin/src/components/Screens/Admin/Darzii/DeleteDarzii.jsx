import React from 'react'
import "./css/DeleteDarzii.css";
import { GrTrash } from 'react-icons/gr';
import { FaChevronLeft } from 'react-icons/fa';


const DarziInfo = [
    {

        title: 'Darzi A',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        darziiId: 1234,


        card: "infoCard"
    },
    {

        title: 'Darzi C',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        darziiId: 1234,
        card: "infoCard"
    },
    {

        title: 'Darzi D',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        darziiId: 1234,
        card: "infoCard"
    },
    {

        title: 'Darzi E',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        darziiId: 1234,
        card: "infoCard"
    }

]

function DeleteDarzii() {


    return (
        <div className='darziiBox'>



            <div className='info'>
                <h4> <a href="/darzii/">

                    <FaChevronLeft />
                    Darziies
                </a>
                </h4>
                <hr></hr>
            </div>

            {DarziInfo.map((item, index) => {
                return (
                    <div className={item.card} key={index}>
                        <div className='darziiTitle'>
                            <label>
                                {item.title}
                            </label>
                        </div>
                        <div className='totalOrders infoBox'>
                            <label htmlFor="totalOrders">Total Orders</label>
                            <span>
                                {item.totalOrders}
                            </span>

                        </div>

                        <div className='ordersCompleted infoBox'>
                            <label htmlFor="ordersCompleted">Orders Completed : </label>
                            <span>{item.ordersCompleted}</span>
                        </div>

                        <div className='ordersPending infoBox' >
                            <label htmlFor="ordersPending">Pending Orders : </label>
                            <span>{item.ordersPending}</span>

                        </div>

                        <div className='deleteBox'><button className='deleteButton' href={item.url}>Delete <GrTrash /></button></div>


                    </div>
                )
            })}

        </div>
    );
}

export default DeleteDarzii;