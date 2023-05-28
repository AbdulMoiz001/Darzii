import React, { useState } from 'react'
import { RiMapPinUserFill } from 'react-icons/ri'
import { BsBox2Fill } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai';
import './OpenDeliveriesCard.css'
import deliveryData from './DeliveryData';
const OpenDeliveriesCard = ({ order, onBookedChange }) => {
    const { pickup, delivery, booked, contact} = order
    // const {handleBookedChange} = props.booking
    const [accepted, setAccepted] = useState(false)
    const handleBooked = () => {
        setAccepted(true)
        setTimeout(()=>{
            onBookedChange()
        },1500,)
        const deliveryObject = {
            pickup: pickup,
            dropoff: delivery,
            contact: contact
        }
        deliveryData.push(order)
        console.log(deliveryData)
    }
    return (
        <>

            <div className="row">
                <div className="col p-5 deliveries">
                    <div className="card p-5">
                        <div className="pickup">
                            <h2>
                                <BsBox2Fill /> : {pickup}
                            </h2>
                        </div>
                        <div className="delivery">
                            <h2>
                                <RiMapPinUserFill /> : {delivery}
                            </h2>
                        </div>
                        {/* <button type='submit' className=' btn-primary my-3' onClick={handleBooked}>
                        Accept
                    </button> */}
                        <button type='submit' className='btn-primary my-3' onClick={handleBooked}>
                            {
                            // booked
                            accepted ? (
                                <>
                                    <AiOutlineCheck className='mr-2' />
                                    Accepted
                                </>
                            ) : (
                                'Accept'
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenDeliveriesCard