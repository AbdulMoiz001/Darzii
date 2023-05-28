import React, { useContext, useEffect, useState } from 'react'
import "./css/DeleteRider.css";
import { GrTrash } from 'react-icons/gr';
import { FaChevronLeft } from 'react-icons/fa';
import axios from "axios"
import { AuthContext } from "../../../../context/authContext/AuthContext";


function DeleteRider() {
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

    const handleDelete = async (id) => {
        try {
            // Make an HTTP request to delete the item with the given ID
            await axios.delete(`http://localhost:5000/user/deleteRider/${id}`, {
                headers: {
                    token: "Bearer " + accessToken,
                },
            });
            // Update the riderInfo state by filtering out the deleted item
            setRiderInfo((prevInfo) => prevInfo.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="riderBox">
            <div className="info">
                <h4>
                    <a href="/rider/">
                        <FaChevronLeft />
                        Riders
                    </a>
                </h4>
                <hr />
            </div>

            {riderInfo.length > 0 ? (
                riderInfo.map((item, index) => (
                    <div className="infoCard" key={index}>
                        <div className="id infoBox">
                            <label htmlFor="id">ID : </label>
                            <label>{item._id}</label>
                        </div>
                        <div className="cnic infoBox">
                            <label htmlFor="cnic">CNIC : </label>
                            <span>{item.cnic}</span>
                        </div>
                        <div className="phone infoBox">
                            <label htmlFor="phone">Phone :</label>
                            <span>{item.phone}</span>
                        </div>
                        <div className="email infoBox">
                            <label htmlFor="email">Email :</label>
                            <span>{item.email}</span>
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
                        <div className="deleteBox">
                            <button className="deleteButton" onClick={() => handleDelete(item._id)}>
                                Delete <GrTrash />
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <div className="infoCard">No Data Found</div>
            )}
        </div>
    );
}

export default DeleteRider;
