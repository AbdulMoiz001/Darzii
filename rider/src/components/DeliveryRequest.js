import React from 'react'
import DeliveryRequestCard from './DeliveryRequestCard';
import './DeliveryRequest.css'

const DeliveryRequest = () => {
    const requests = {
        orderID : '234555446',
        contact_delivery : '245656774',
        contact_pickup : '3443564353',
        address : 'fdgsrh ghdgagg',
        pickup  : 'fdgfhhde  rertr' 
    };
  return (
    <>
        
        <div className="row g-0 px-5 container-request">
            <div className="request-canvas">
                <DeliveryRequestCard request = {requests}/>
                <DeliveryRequestCard request = {requests}/>
            </div>
        </div>
    </>
  )
}

export default DeliveryRequest