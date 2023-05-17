import React from 'react';
import './Payments.css';

const Payments = ({ Orders }) => {
  
  const confirmedPayment = () => {
    return Orders.filter(order => order.PaymentStatus === 'Confirmed').reduce((total, order) => total + order.Price, 0);
  }
  
  const unconfirmedPayment = () => {
    return Orders.filter(order => order.PaymentStatus === 'Unconfirmed').reduce((total, order) => total + order.Price, 0);
  }
  
  const totalPayment = () => {
    return confirmedPayment()+unconfirmedPayment();
  }

  return (
    <div className='payments'>
      <div className="page-title">Payments Details</div>
      <div className='payments-container'>
        <div className='filler'>
          <div className='TableData scrollable'>
            <table className="table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Clothing Type</th>
                  <th>Delivery Deadline</th>
                  <th>Price</th>
                  <th>Customer Name</th>
                  <th>Payment Status</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {Orders.map((order) => {
                  return (
                    <tr key={order.OrderID}>
                      <td>{order.OrderID}</td>
                      <td>{order.ClothingType}</td>
                      <td>{order.OrderDeliveryDeadline}</td>
                      <td>{order.Price}</td>
                      <td>{order.CustomerName}</td>
                      <td>{order.PaymentStatus}</td>
                      <td>{order.Rating}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='payment-footer'>
          <tr className='footer-row'>
            <td>Confirmed Amount: <span className='amount'>{confirmedPayment()}</span></td>
            <td>Unconfirmed Amount: <span className='amount'>{unconfirmedPayment()}</span></td>
            <td>Total Amount: <span className='amount'>{totalPayment()}</span></td>
          </tr>
        </div>
      </div>
    </div>
  );
};

export default Payments;
