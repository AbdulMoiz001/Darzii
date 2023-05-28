import React, { useContext, useState } from 'react';
import './Orders.css';
import axios from 'axios';
import { useEffect } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';


const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState();
    const accessToken = user.accessToken;


    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/order/getOrders", {
                    headers: {
                        token: "Bearer " + accessToken,
                    },
                });
                setOrders(res.data);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchOrders();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const orderCards = orders ? orders.map((order) => (
        <div className="order-card" key={order._id} onClick={() => handleOrderClick(order)}>
            <h2>{order.ItemTitle}</h2>
            <p>Order ID: {order._id}</p>
            {order.TailorID ? (
                <p>Tailor: {order.TailorID.name}</p>
            ) : (
                <></>
            )}
            <p>Status: {order.OrderStatus}</p>
            {/* <a className="button" href={`Order?order=${encodeURIComponent(JSON.stringify(order))}`}>Details</a> */}
        </div>
    )) : null;

    const handleOrderClick = (order) => {
        const encodedOrder = encodeURIComponent(JSON.stringify(order));
        window.location.href = `Order?order=${encodedOrder}`;
    };

    // const orderCards = orders.map((order) => (
    //     <div className="order-card" key={order.OrderID} onClick={() => handleOrderClick(order)}>
    //         <h2>{order.ItemTitle}</h2>
    //         <p>Order ID: {order.OrderID}</p>
    //         <p>Tailor: {order.TailorName}</p>
    //         <p>Status: {order.OrderStatus}</p>
    //     </div>
    // ));

    return <div className="orders-container">{orderCards}</div>;
};

export default Orders;