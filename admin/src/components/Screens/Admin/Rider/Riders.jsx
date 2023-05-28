import React, { useContext, useEffect, useState } from 'react'
import "./css/Riders.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AuthContext } from '../../../../context/authContext/AuthContext';
import axios from 'axios';

function Riders() {

    const [riderInfo, setRiderInfo] = useState([]);
    const { user } = useContext(AuthContext);
    const accessToken = user ? user.accessToken : "";

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get("http://localhost:5000/user/getRiders", {
                    headers: {
                        token: "Bearer " + accessToken,
                    },
                });
                setRiderInfo(res.data);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);


    return (
        <div className='Riders'>

            <div className='info'>
                <h4> <a href="/rider/">

                    <FaChevronLeft />
                    Riders
                </a>
                </h4>
                <hr></hr>
            </div>


            {
                riderInfo ?
                    riderInfo.map((item, index) => {
                        return (
                            <div className="infoCard" key={index}>
                                <div className='riderTitle'>
                                    <label>
                                        ID :
                                        {item._id}
                                    </label>
                                </div>
                                <div className='riderTitle'>
                                    <label>
                                        Name :
                                        {item.firstName + " " + item.lastName}
                                    </label>
                                </div>
                                <div className='riderTitle'>
                                    <label>
                                        Email :
                                        {item.email}
                                    </label>
                                </div>

                                <div className='infoBox address' >
                                    <label htmlFor="Address">Address: </label>
                                    <span>{item.address}</span>
                                </div>

                                <div className="vehicleMake infoBox">
                                    <label htmlFor="vehicleMake">Vehicle Make :</label>
                                    <span>{item.vehicleMake}</span>
                                </div>
                                <div className="vehicleReg infoBox">
                                    <label htmlFor="vehicleReg">Vehicle Registration :</label>
                                    <span>{item.vehicleReg}</span>
                                </div>
                                <div className="vehicleModel infoBox">
                                    <label htmlFor="vehicleModel">Vehicle Model :</label>
                                    <span>{item.vehicleModel}</span>
                                </div>

                                <div className='viewitem'><a href={`/rider/edit?item=${encodeURIComponent(JSON.stringify(item))}`}>View More  <FaChevronRight /></a></div>
                            </div>
                        )
                    })
                    :
                    <></>
            }



        </div>
    );
}


export default Riders;