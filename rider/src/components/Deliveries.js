import React, { useState } from 'react'
import OpenDeliveriesCard from './OpenDeliveriesCard'
import orders from './Data'
const Deliveries = () => {
    // const order = {
    //     pickup : 'wrtyydgfh ',
    //     delivery: 'gfdgfdff hfddf',
    //     booked: false
    // }

    const [data, setData] = useState(orders)
    const handleBookedChange = (index) => {
        setData((prevData) => {
            const updatedData = [...prevData];
            updatedData[index] = {
              ...updatedData[index],
              booked: !updatedData[index].booked
            };
            return updatedData;
        });
    };

  return (
    <>
        <div className="container-fluid">
            <h2>
                Delivery Requests
            </h2>
            <div className="row">
                
                {   data.map((order,index)=>{
                    if(!order.booked){
                        return <OpenDeliveriesCard key= {index} order = {order} onBookedChange={() =>handleBookedChange(index)}/>
                    }
                })
                
                }
            </div>
        </div>
    </>
  )
}

export default Deliveries