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
                const res = await axios.get("http://localhost:5000/user/getAllTailors", {
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


            {riderInfo.map((item, index) => {
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
                                {item.userName}
                            </label>
                        </div>
                        <div className='riderTitle'>
                            <label>
                                Email :
                                {item.email}
                            </label>
                        </div>


                        <div className=' infoBox'>
                            <label htmlFor="TailorName">Tailor Name:</label>
                            <span>
                                {item.tailorName}
                            </span>

                        </div>

                        <div className='infoBox'>
                            <label htmlFor="FirstName"> First Name: </label>
                            <span>{item.firstName}</span>
                        </div>

                        <div className='infoBox'>
                            <label htmlFor="LastName"> Last Name: </label>
                            <span>{item.lastName}</span>
                        </div>

                        <div className='infoBox address' >
                            <label htmlFor="Address">Address: </label>
                            <span>{item.address}</span>

                        </div>

                        <div className='viewitem'><a href={`/rider/edit?item=${encodeURIComponent(JSON.stringify(item))}`}>View More  <FaChevronRight /></a></div>


                    </div>
                )
            })}



        </div>
    );
}


export default Riders;