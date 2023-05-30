import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi'
import './DeliveryRequest'
import { Link } from 'react-router-dom';
const DeliveryRequestCard = (props) => {
    const { orderID, contact_delivery, contact_pickup, address, pickup, lat, lng } = props.request
    const [delivered, setDelivered] = useState(false)
    const [status, setStatus] = useState('')
    const handleDeliveredClick = () => {
        return (<>
            <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">
                        Hello, world! This is a toast message.
                    </div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </>)
    }
    const link = `https://www.google.com/maps/dir/${lat},${lng}`;
    return (
        <div className="col">
            <div className="order-card p-3 row">
                <div className="col">
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
                <div className="col">
                    <div className="row">
                        <div className='col'>
                            <div class="btn-group">
                                <button class="btn btn-secondary dropdown-toggle px-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {status === '' ? <>Dropdown</> : <>{status}</>}
                                </button>
                                <ul class="dropdown-menu ">
                                    <li>
                                        <button className='btn' onClick={() => { setStatus('Picked Up') }}>
                                            Picked Up
                                        </button>
                                    </li>
                                    <li>
                                        <button className='btn' onClick={() => { setStatus('Dropped') }}>
                                            Dropped
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <button className="btn btn-secondary col link-map" >
                            <Link to={link} target='blank'>
                                Open on Google Map <BiLinkExternal />
                            </Link>
                        </button>
                    </div>
                    <button type="submit" className='btn my-5 px-3 btn-primary done-delivery' onClick={handleDeliveredClick} >
                        Update Status
                    </button>

                </div>
            </div>
        </div>
    )
}

export default DeliveryRequestCard