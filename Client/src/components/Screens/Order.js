import { useLocation } from 'react-router-dom';
import React from 'react';
import './Order.css';

const Order = () => {
  const location = useLocation();
  const order = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('order')));

  const renderMeasurements = () => {
    const { Measurements } = order;

    const measurements = Object.entries(Measurements);

    return measurements.map(([key, value]) => (
      <p key={key}>
        {key}: {value}
      </p>
    ));
  };

  const renderDesign = () => {
    const { Design } = order;
    const design = Object.entries(Design);

    return design.map(([key, value]) => (
      <p key={key}>
        {key}: {value || 'Not specified'}
      </p>
    ));
  };

  return (
    <div className="order-details">
      <h2>{order.ItemTitle}</h2>
      <h4><a href={`/Appointments?order=${encodeURIComponent(JSON.stringify(order))}`}>Request an Appointment ?</a></h4>
      <p>Order ID: {order.OrderID}</p>
      <p>Tailor: {order.TailorName}</p>
      <p>Size: {order.Size}</p>
      <h3>Measurements</h3>
      {renderMeasurements()}
      <h3>Design</h3>
      {renderDesign()}
      <p>Catalogue: {order.Catalogue ? 'Yes' : 'No'}</p>
      <p>Price: {order.Price}</p>
      <p>Clothing Type: {order.ClothingType}</p>
      <p>Order Status: {order.OrderStatus}</p>
      <p>Customer ID: {order.CustomerID}</p>
      <p>Customer Contact Number: {order.CustomerContactNumber}</p>
      <p>Customer Name: {order.CustomerName}</p>
      {order.TailorID ?
        <p>Tailor Contact Number: {order.TailorID.phone}</p>
        :
        <></>
      }
      <p>Order Acceptance Date: {order.OrderAcceptanceDate}</p>
      <p>Order Delivery Deadline: {order.OrderDeliveryDeadline}</p>
      <p>Payment Status: {order.PaymentStatus}</p>
      <p>Rating: {order.Rating}</p>
    </div>
  );
};

export default Order;