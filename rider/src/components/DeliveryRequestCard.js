import React from 'react'
import './DeliveryRequest'
const DeliveryRequestCard = (props) => {
    const { orderID, contact_delivery, contact_pickup,address, pickup } = props.request
    return (
        <div className="col">
            <div className="order-card p-3">
                <div className="order-id">
                    <h4> Order ID: {orderID}</h4> 
                </div>
                <div>
                    Pickup Address: {pickup}
                </div>
                <div>
                    Delivery Address: {address},
                </div> 
                <div>
                    Pick up Contact: {contact_pickup},
                </div>
                <div>
                    Delivery Contact: {contact_delivery},
                </div>
            </div>
        </div>
    )
}

export default DeliveryRequestCard