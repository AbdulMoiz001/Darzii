import React from 'react';
import './Orders.css';

const OrdersData = [
    {
        OrderID: 1,
        OrderType: "Custom",
        ItemID: 1,
        ItemTitle: "Custom Shirt",
        TailorID: 1,
        TailorName: "John's Tailoring",
        Size: "Medium",
        Measurements: {
            height: 175,
            weight: 70,
            chest: 100,
            waist: 80,
            hips: 95,
            shoulder: 45,
            sleeves: 65,
            neck: 40
        },
        ClothUI: false,
        Design: {
            beltStyle: "Standard",
            cuffsStyle: "Button",
            bottomStyle: "Straight",
            trouserStyle: "Slim Fit",
            stitchStyle: "Single Stitch",
            collarStyle: "Spread",
            sleevesStyle: "Full Sleeves",
            shoulderStyle: "Padded",
            neckStyle: "V-Neck",
            lacingStyle: "No Lacing"
        },
        Catalogue: true,
        CatalogueID: null,
        Price: 1000,
        Title: "Custom Shirt",
        ClothingType: "Shirt",
        OrderStatus: "Pending",
        CustomerID: 1,
        CustomerContactNumber: "1234567890",
        CustomerName: "John Doe",
        TailorContactNumber: "9876543210",
        OrderAcceptanceDate: "2023-05-17T10:00:00Z",
        OrderDeliveryDeadline: "2023-05-24T10:00:00Z",
        PaymentStatus: "Paid",
        Rating: 4
    },
    {
        OrderID: 2,
        OrderType: "Catalogue",
        ItemID: 2,
        ItemTitle: "Formal Trousers",
        TailorID: 2,
        TailorName: "Jane's Tailoring",
        Size: "Large",
        Measurements: {
            height: null,
            weight: null,
            chest: null,
            waist: null,
            hips: null,
            shoulder: null,
            sleeves: null,
            neck: null
        },
        ClothUI: true,
        Design: {
            beltStyle: null,
            cuffsStyle: null,
            bottomStyle: null,
            trouserStyle: null,
            stitchStyle: null,
            collarStyle: null,
            sleevesStyle: null,
            shoulderStyle: null,
            neckStyle: null,
            lacingStyle: null
        },
        Catalogue: true,
        CatalogueID: 123,
        Price: 800,
        Title: "Formal Trousers",
        ClothingType: "Trousers",
        OrderStatus: "Completed",
        CustomerID: 2,
        CustomerContactNumber: "9876543210",
        CustomerName: "Jane Smith",
        TailorContactNumber: "1234567890",
        OrderAcceptanceDate: "2023-05-10T10:00:00Z",
        OrderDeliveryDeadline: "2023-05-17T10:00:00Z",
        PaymentStatus: "Paid",
        Rating: 5
    }
];

const Orders = () => {
  
  const orderCards = OrdersData.map((order) => (
    <div className="order-card" key={order.OrderID}>
      <h2>{order.ItemTitle}</h2>
      <p>Order ID: {order.OrderID}</p>
      <p>Tailor: {order.TailorName}</p>
      <p>Status: {order.OrderStatus}</p>
      <a className="button" href={`Order?order=${encodeURIComponent(JSON.stringify(order))}`}>Details</a>
    </div>
  ));

  return <div className="orders-container">{orderCards}</div>;
};

export default Orders;