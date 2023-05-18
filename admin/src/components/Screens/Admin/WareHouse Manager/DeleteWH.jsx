import React from 'react'
import "./css/DeleteWH.css";
import { GrTrash } from 'react-icons/gr';
import { FaChevronLeft } from 'react-icons/fa';


const WarehoueManagerInfo = [
    {

        title: 'Warehouse Manager A',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        warehouseId: 1234,


        card: "infoCard"
    },
    {

        title: 'Warehouse Manager C',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        warehouseId: 1234,
        card: "infoCard"
    },
    {

        title: 'Warehouse Manager D',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        warehouseId: 1234,
        card: "infoCard"
    },
    {

        title: 'Warehouse Manager E',
        orders: 'X',
        ordersCompleted: 'OX',
        ordersPending: 'X',
        totalOrders: 50,

        warehouseId: 1234,
        card: "infoCard"
    }

]

function DeleteWH() {


    return (
        <div className='warehouseBox'>



            <div className='info'>
                <h4> <a href="/wh-manager/">

                    <FaChevronLeft />
                    Warehouse Manageries
                </a>
                </h4>
                <hr></hr>
            </div>

            {WarehoueManagerInfo.map((item, index) => {
                return (
                    <div className={item.card} key={index}>
                        <div className='warehouseTitle'>
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

                        <div className=' infoBox'>
                            <label htmlFor="">Orders Completed : </label>
                            <span>{item.ordersCompleted}</span>
                        </div>

                        <div className=' infoBox' >
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

export default DeleteWH;