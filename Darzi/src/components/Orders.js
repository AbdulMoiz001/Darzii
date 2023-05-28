import React, { useState } from 'react';
import './Orders.css';

function AllOrders({ Orders }) {
  const [selectedOption, setSelectedOption] = useState('All');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="all-orders">
      <div>
        <div className="page-title">{selectedOption} Orders</div>
        <div className="radio-buttons">
          <label className='radio-container'>
            <input
              type="checkbox"
              name="option"
              value="All"
              checked={selectedOption === "All"}
              onChange={handleOptionChange}
            />
            <span className="radio-checkmark"></span>
            All
          </label>
          <label className='radio-container'>
            <input
              type="checkbox"
              name="option"
              value="Dispatched"
              checked={selectedOption === "Dispatched"}
              onChange={handleOptionChange}
            />
            <span className="radio-checkmark"></span>
            Dispatched
          </label>
          <label className="radio-container">
            <input
              type="checkbox"
              name="option"
              value="Stitching"
              checked={selectedOption === "Stitching"}
              onChange={handleOptionChange}
            />
            <span className="radio-checkmark"></span>
            Stitching
          </label>
          <label className="radio-container">
            <input
              type="checkbox"
              name="option"
              value="Received"
              checked={selectedOption === "Received"}
              onChange={handleOptionChange}
            />
            <span className="radio-checkmark"></span>
            Received
          </label>
          <label className='radio-container'>
            <input
              type="checkbox"
              name="option"
              value="Ready"
              checked={selectedOption === "Ready"}
              onChange={handleOptionChange}
            />
            <span className="radio-checkmark"></span>
            Ready
          </label>
        </div>
      </div>
      <div className='TableData scrollable'>
        <table className="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Clothing Type</th>
              <th>Acceptance Date</th>
              <th>Delivery Deadline</th>
              <th>Order Status</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {Orders ? Orders.map((order) => {
              if (order.OrderStatus === selectedOption || selectedOption === "All") {
                return (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.ClothingType}</td>
                    <td>{order.OrderAcceptanceDate}</td>
                    <td>{order.OrderDeliveryDeadline}</td>
                    <td>{order.OrderStatus}</td>
                    <td>{order.Price}</td>
                    <td>{order.CustomerID && order.CustomerID.firstName + " " + order.CustomerID.firstName}</td>
                    <td>
                      {!(order.OrderStatus === "Dispatched") && (
                        <a className="update-btn" href={`order?order=${encodeURIComponent(JSON.stringify(order))}`}>
                          Update
                        </a>
                      )}
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            }) : <></>}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllOrders;