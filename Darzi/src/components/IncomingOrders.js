import React from 'react';
import './IncomingOrders.css';
import axios from 'axios';

function IncomingOrders({ NewOrders }) {
  return (
    <div className="incoming-orders">
      <div className="page-title">Incoming Orders</div>
      <div className="card-container scrollable">
        {NewOrders.map((order) => (
          <div className="card" key={order.OrderID}>
            <div className="card-header">
              <h3>Order ID: {order.OrderID}</h3>
            </div>
            <div className="card-content">
              <p>Clothing Type: {order.ClothingType}</p>
              <p>Delivery Deadline: {order.OrderDeliveryDeadline}</p>
              <p>Price: {order.Price}</p>
              <p>Customer Name: {order.CustomerName}</p>
              <a className="update-btn" href={`order?order=${encodeURIComponent(JSON.stringify(order))}`}>
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IncomingOrders;