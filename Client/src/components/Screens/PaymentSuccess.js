import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './PaymentSuccess.css';
import axios from 'axios';
import { AuthContext } from '../../context/authContext/AuthContext';

function PaymentSuccess() {
    const { user } = useContext(AuthContext);
    const accessToken = user.accessToken;



    const location = useLocation();
    const PaidOrdersID = JSON.parse(new URLSearchParams(location.search).get('PaidOrders'));
    const urlParams = new URLSearchParams(window.location.search);
    const paymentIntent = urlParams.get('payment_intent');
    const navigate = useNavigate();

    useEffect(() => {
        const orders = JSON.parse(localStorage.getItem('orders'));

        const PaidOrders = orders.filter(order => PaidOrdersID.includes(order.local_orderID));

        const CompleteOrders = PaidOrders.map((order) => ({
            ...order,
            payment_intent: paymentIntent
        }));

        CompleteOrders.map(async (order, payment_intent) => {
            console.log("Send POST request for " + order.local_orderID);
            try {
                const res = await axios.post("http://localhost:5000/order/createOrder",
                    order,
                    {
                        headers: {
                            token: "Bearer " + accessToken,
                        },

                    });
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
            console.log(order, payment_intent);
        });

        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemCount');
        localStorage.removeItem('orders');

        const timer = setTimeout(() => {
            navigate('/Orders');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='PaymentSuccess'>
            <h1>Payment Successfull</h1>
            <img src='/Misc/PaymentSuccess.png' alt='Payment Successfull' />
        </div>
    )
}

export default PaymentSuccess;