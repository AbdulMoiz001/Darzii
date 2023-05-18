import React, { useContext, useEffect, useState } from 'react'
import "./css/Darzis.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AuthContext } from '../../../../context/authContext/AuthContext';
import axios from 'axios';


function Darzis() {

    const [darziInfo, setDarziInfo] = useState([]);
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
                setDarziInfo(res.data);
                console.log(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);


    return (
        <div className='Darzis'>

            <div className='info'>
                <h4> <a href="/darzii/">

                    <FaChevronLeft />
                    Darziies
                </a>
                </h4>
                <hr></hr>
            </div>


            {darziInfo.map((item, index) => {
                return (
                    <div className="infoCard" key={index}>
                        <div className='darziiTitle'>
                            <label>
                                ID :
                                {item._id}
                            </label>
                        </div>
                        <div className='darziiTitle'>
                            <label>
                                Name :
                                {item.userName}
                            </label>
                        </div>
                        <div className='darziiTitle'>
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

                        <div className='viewitem'><a href={`/darzii/edit?item=${encodeURIComponent(JSON.stringify(item))}`}>View More  <FaChevronRight /></a></div>


                    </div>
                )
            })}



        </div>
    );
}


export default Darzis;