import { useState } from "react";
import { useLocation } from "react-router-dom";
import React from "react";
import "./Order.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Order = () => {
  const location = useLocation();
  const order = JSON.parse(
    decodeURIComponent(new URLSearchParams(location.search).get("order"))
  );

  const [measurementsCollapsed, setMeasurementsCollapsed] = useState(true);
  const [designCollapsed, setDesignCollapsed] = useState(true);

  const toggleMeasurements = () => {
    setMeasurementsCollapsed(!measurementsCollapsed);
  };

  const toggleDesign = () => {
    setDesignCollapsed(!designCollapsed);
  };

  const renderMeasurements = () => {
    const { Measurements } = order;
    const measurements = Object.entries(Measurements);

    return (
      <div className={`card-content ${measurementsCollapsed ? "hidden" : ""}`}>
        {measurements.map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </div>
    );
  };

  const renderDesign = () => {
    const { Design } = order;
    const design = Object.entries(Design);

    return (
      <div className={`card-content ${designCollapsed ? "hidden" : ""}`}>
        {design.map(([key, value]) => (
          <p key={key}>
            {key}: {value || "Not specified"}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="order-details">
      <div className="heading">
        {(order.ItemTitle) && <h2>{order.ItemTitle}</h2>}
        <h4>
          <a
            className="button-29"
            role="button"
            href={`/Appointments?order=${encodeURIComponent(JSON.stringify(order))}`}
          >
            Request an Appointment ?
          </a>
        </h4>
      </div>
      <p className="orderID">ID# {order._id}</p>
      <div className="dates">
        <p>Acceptance Date: <strong>{(order.OrderAcceptanceDate) ? (new Date(order.OrderAcceptanceDate)).toISOString().slice(0, 10) : "NaN"}</strong></p>
        <p>Delivery Deadline: <strong>{(order.OrderDeliveryDeadline) ? (new Date(order.OrderDeliveryDeadline)).toISOString().slice(0, 10) : "NaN"}</strong></p>
      </div>
      <div className="center-dash">
        <div className="design-measurement">
          <div className="card" onClick={toggleMeasurements}>
            <div className={`card-title ${measurementsCollapsed ? "collapsed" : ""}`}>
              Measurements
              {measurementsCollapsed ? <IoIosArrowDown className="arrow-icon" /> : <IoIosArrowUp className="arrow-icon" />}
            </div>
            {renderMeasurements()}
          </div>
          <div className="card" onClick={toggleDesign}>
            <div className={`card-title ${designCollapsed ? "collapsed" : ""}`}>
              Design
              {designCollapsed ? <IoIosArrowDown className="arrow-icon" /> : <IoIosArrowUp className="arrow-icon" />}
            </div>
            {renderDesign()}
          </div>
        </div>
        <div className="row-card">
          <div className="card-2">
            <p>Tailor: {order.TailorID.tailorName}</p>
            <p>Tailor Contact Number: {order.TailorID.phone}</p>
            <p>Rating: {order.Rating}</p>
          </div>
        </div>
        <div className="row-card">
          <div className="card-2">
            <p>Price: {order.Price}</p>
            <p>Payment Status: {order.PaymentStatus}</p>
          </div>
        </div>
        <div className="row-card">
          <div className="card-2">
            <p>Order Status: {order.OrderStatus}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
