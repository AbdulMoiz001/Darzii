import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Order.css";
import DesignPane from "./DesignPane";

const Order = () => {
    const location = useLocation();
    const propString = new URLSearchParams(location.search).get("order");
    const o_data = JSON.parse(decodeURIComponent(propString));
    const [order, setOrder] = useState({
        OrderID: o_data.OrderID,
        ClothingType: o_data.ClothingType,
        OrderStatus: o_data.OrderStatus,
        Price: o_data.Price,
        CustomerID: o_data.CustomerID,
        CustomerContactNumber: o_data.CustomerContactNumber,
        CustomerName: o_data.CustomerName,
        TailorID: o_data.TailorID,
        TailorName: o_data.TailorName,
        TailorContactNumber: o_data.TailorContactNumber,
        OrderAcceptanceDate: o_data.OrderAcceptanceDate,
        OrderDeliveryDeadline: o_data.OrderDeliveryDeadline,
    });

    const nextStatus = () => {
        let newStatus = "Dispatched";
        if (order.OrderStatus !== "Dispatched") {
            if (order.OrderStatus === "Pending") {
                newStatus = "Received";
            } else if (order.OrderStatus === "Received") {
                newStatus = "Stitching";
            } else if (order.OrderStatus === "Stitching") {
                newStatus = "Ready";
            } else if (order.OrderStatus === "Ready") {
                newStatus = "Dispatched";
            }
        }
        return newStatus;
    };

    useEffect(() => {
        if (order.OrderStatus === "Pending") {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, "0");
            const day = String(today.getDate()).padStart(2, "0");
            const date = `${year}-${month}-${day}`;

            setOrder((prevOrder) => ({
                ...prevOrder,
                OrderAcceptanceDate: date,
            }));
        }
    }, [order.OrderStatus]);

    const handleStatusChange = () => {
        const newStatus = nextStatus();
        setOrder((prevOrder) => ({
            ...prevOrder,
            OrderStatus: newStatus,
        }));
    };

    return (
        <>
            <div className="order-card">
                <h3>Order Details</h3>
                <div className="order-info">
                    <p>
                        <span>Order ID:</span> {order.OrderID}
                    </p>
                    {order.OrderStatus !== "Pending" && (
                        <p>
                            <span>Acceptance Date:</span> {order.OrderAcceptanceDate}
                        </p>
                    )}
                    <p>
                        <span>Delivery Deadline:</span> {order.OrderDeliveryDeadline}
                    </p>
                    <p>
                        <span>Clothing Type:</span> {order.ClothingType}
                    </p>
                    <p>
                        <span>Price:</span> {order.Price}
                    </p>
                    <p>
                        <span>Customer Name:</span> {order.CustomerName}
                    </p>
                    <p>
                        <span>Customer ID:</span> {order.CustomerID}
                    </p>
                    <p>
                        <span>Customer Contact:</span> {order.CustomerContactNumber}
                    </p>
                    <p>
                        <span>Order Status:</span> {order.OrderStatus}
                    </p>
                </div>
                <div className="btn">
                    {(order.OrderStatus !== "Dispatched" && order.OrderStatus !== "Pending") && (
                        <button onClick={handleStatusChange}>Update to {nextStatus()}</button>
                    )}
                    {(order.OrderStatus === "Pending") && (
                        <button onClick={handleStatusChange}>Accept</button>
                    )}
                </div>
            </div>
            <div className="order-design">
                <h3>Order Design</h3>
                <div className="design-pane">
                    <DesignPane/>
                </div>
            </div>
        </>
    );
};

export default Order;
