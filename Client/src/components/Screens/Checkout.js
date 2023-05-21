import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate, useLocation } from 'react-router-dom';


function Checkout() {
    const location = useLocation();
    const cartItems = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('cartItems')));
    const [address, setAddress] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCVV] = useState('');
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const navigate = useNavigate();

    const handlePayment = () => {
        setProcessingPayment(true);

        // Create a promise that resolves after the specified delay
        const paymentPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });

        // Wait for the payment processing delay
        paymentPromise.then(() => {
            setProcessingPayment(false);
            setPaymentSuccess(true);
            const orders = cartItems.map((item) => ({
                ...item,
                address: address,
                creationDate: new Date().toISOString().split('T')[0]
            }));  
            console.log(orders);
            // Perform the navigation
            localStorage.removeItem('cartItems');
            localStorage.removeItem('cartItemCount');
            // navigate('/Store');
            // window.location.reload();
        });
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
            <div className='payment-section'>
                <h3>Payment Information</h3>
                <input
                    type='text'
                    placeholder='Card Number'
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                />
                <input
                    type='text'
                    placeholder="Card Holder's Name"
                    value={cardHolder}
                    onChange={(e) => setCardHolder(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Expiry Date'
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='CVV'
                    value={cvv}
                    onChange={(e) => setCVV(e.target.value)}
                />
            </div>
            <button className='checkout-button book-btn' onClick={handlePayment} disabled={processingPayment || paymentSuccess}>
                {processingPayment ? 'Processing Payment...' : 'Proceed to Payment'}
            </button>
            {paymentSuccess && (
                <div className='payment-success'>
                    <span>Payment Successful! Your order has been placed</span>
                </div>
            )}
        </div>
    );
}

export default Checkout;
