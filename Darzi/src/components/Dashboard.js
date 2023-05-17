import React from 'react';
import './Dashboard.css';
import AnimatedNumber from 'react-animated-number';

const Dashboard = ({ Orders , NewOrders}) => {

    const incomingOrders = () => {
        return NewOrders.length;
    }
    
    const overallRating = () => {
        return (Orders.filter(order => order.PaymentStatus === 'Confirmed').reduce((total, order) => total + order.Rating, 0))/(Orders.filter(order => order.PaymentStatus === 'Confirmed').length);
    }

    const unconfirmedPayment = () => {
        return Orders.filter(order => order.PaymentStatus === 'Unconfirmed').reduce((total, order) => total + order.Price, 0);
    }

    const confirmedPayment = () => {
        return Orders.filter(order => order.PaymentStatus === 'Confirmed').reduce((total, order) => total + order.Price, 0);
    }

    const receivedOrders = () => {
        return Orders.filter(order => order.OrderStatus === 'Received').length;
    }

    const ordersInProgress = () => {
        return Orders.filter(order => order.OrderStatus === 'Stitching').length;
    }

    const readyOrders = () => {
        return Orders.filter(order => order.OrderStatus === 'Ready').length;
    }

    const dispatchedOrders = () => {
        return Orders.filter(order => order.OrderStatus === 'Dispatched').length;
    }

    const counter = (param) => {
        return <AnimatedNumber
            value={param}
            formatValue={n => n.toFixed(0)}
            duration={1000}
            style={{
                transition: '1.2s ease-out'
            }}
        />

    };

    return (
        <div className="main-dash">
            <div className="card" onClick={console.log("Hello")}>
                <h2>Incoming Orders</h2>
                <p>{counter(incomingOrders())}</p>
            </div>
            <div className="card">
                <h2>Orders In Progress</h2>
                <p>{counter(ordersInProgress())}</p>
            </div>
            <div className="card">
                <h2>Dispatched Orders</h2>
                <p>{counter(dispatchedOrders())}</p>
            </div>
            <div className="card">
                <h2>Received Orders</h2>
                <p>{counter(receivedOrders())}</p>
            </div>
            <div className="card">
                <h2>Ready Orders</h2>
                <p>{counter(readyOrders())}</p>
            </div>
            <div className="card">
                <h2>Confirmed Payment</h2>
                <p>Rs. {counter(confirmedPayment())}</p>
            </div>
            <div className="card">
                <h2>Unconfirmed Payment</h2>
                <p>Rs. {counter(unconfirmedPayment())}</p>
            </div>
            <div className="card">
                <h2>Overall Rating</h2>
                <p>{counter(overallRating())}</p>
            </div>
        </div>
    );
};

export default Dashboard;
