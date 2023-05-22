import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate, useLocation } from 'react-router-dom';


function Checkout() {
    const location = useLocation();
    const cartItems = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('cartItems')));
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handlePayment = () => {
        const orders = cartItems.map((item) => ({
            ...item,
            address: address,
            creationDate: new Date().toISOString().split('T')[0]
        }));  
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemCount');
        navigate('/');
        window.location.reload();
    };

    return (
        <div className='checkout-container'>
            <h2>Checkout</h2>
            <div>
                <h2>Total: Rs. {cartItems.reduce((total, cart_item) => total + cart_item.price, 0)}</h2>
            </div>
            <div className='address-section'>
                <h3>Shipping Address</h3>
                <input
                    type='text'
                    placeholder='Enter your address'
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button className='checkout-button book-btn' onClick={handlePayment}>
                Proceed to Payment
            </button>
        </div>
    );
}

export default Checkout;
