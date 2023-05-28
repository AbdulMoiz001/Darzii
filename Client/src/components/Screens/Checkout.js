import React, { useEffect, useState } from 'react';
import './Checkout.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Stripe from './Stripe/Stripe';

function Checkout() {
    const location = useLocation();
    const [address, setAddress] = useState('');
    const [orders, setOrders] = useState('');
    const [cartItems, setCartItems] = useState(JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('cartItems'))));

    const addAddressAndInfo = () => {
        const orders_with_address = cartItems.map((item) => ({
            ...item,
            address: address,
            creationDate: new Date().toISOString().split('T')[0]
        }));
        setOrders(orders_with_address);
        console.log(orders_with_address);
    };


    useEffect(() => {
        addAddressAndInfo();
    }, [address]);
    useEffect(() => {
        console.log(cartItems);
    },);

    return (
        <><div className='checkout-container'>
            <h2>Checkout</h2>
            <div>
                <h2>Total: Rs. {cartItems.reduce((total, cart_item) => total + cart_item.price, 0)}</h2>
            </div>
            <div className='parent'>
                <div className='child'>
                    <div className='address-section'>
                        <h3>Shipping Address</h3>
                        <input
                            type='text'
                            placeholder='Enter your address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)} />
                    </div>
                </div>
                <div className='child'>
                    {
                        orders ?
                            <Stripe orders={orders} />
                            : <></>
                    }
                </div>
            </div>
        </div><div className='footer'></div></>
    );
}

export default Checkout;
