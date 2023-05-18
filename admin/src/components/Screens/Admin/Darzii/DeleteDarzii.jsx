import React, { useContext, useEffect, useState } from 'react'
import "./css/DeleteDarzii.css";
import { GrTrash } from 'react-icons/gr';
import { FaChevronLeft } from 'react-icons/fa';
import axios from "axios"
import { AuthContext } from "../../../../context/authContext/AuthContext";


function DeleteDarzii() {
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
                console.log(res);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);

    const handleDelete = async (id) => {
        try {
            // Make an HTTP request to delete the item with the given ID
            await axios.delete(`http://localhost:5000/user/deleteTailor/${id}`, {
                headers: {
                    token: "Bearer " + accessToken,
                },
            });

            // Update the darziInfo state by filtering out the deleted item
            setDarziInfo((prevInfo) => prevInfo.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="darziiBox">
            <div className="info">
                <h4>
                    <a href="/darzii/">
                        <FaChevronLeft />
                        Darziies
                    </a>
                </h4>
                <hr />
            </div>

            {darziInfo.length > 0 ? (
                darziInfo.map((item, index) => (
                    <div className="infoCard" key={index}>
                        <div className="id infoBox">
                            <label htmlFor="id">ID : </label>
                            <label>{item._id}</label>
                        </div>
                        <div className="darziiuserName infoBox">
                            <label htmlFor="cnic">UserName : </label>
                            <label>{item.userName}</label>
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

export default DeleteDarzii;
