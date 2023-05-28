import React from "react";
import "./css/ManagerWH.css";
import { GrTrash } from "react-icons/gr";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authContext/AuthContext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const WarehoueManagerInfo = [
    {
        image: "X",
        name: "Warehouse Manager A",
        price: "OX",
        countInStock: "X",
        totalOrders: 50,
        _id: 1234,

        card: "infoCard",
    },
    {
        name: "Warehouse Manager C",
        image: "X",
        price: "OX",
        countInStock: "X",
        totalOrders: 50,

        _id: 1234,
        card: "infoCard",
    },
    {
        name: "Warehouse Manager D",
        image: "X",
        price: "OX",
        countInStock: "X",
        totalOrders: 50,

        _id: 1234,
        card: "infoCard",
    },
    {
        name: "Warehouse Manager E",
        image: "X",
        price: "OX",
        countInStock: "X",
        totalOrders: 50,

        _id: 1234,
        card: "infoCard",
    },
];

function ManageWH() {
    const { user } = useContext(AuthContext);
    const accessToken = user ? user.accessToken : "";

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:5000/product/allProducts",
                    {
                        headers: {
                            token: "Bearer " + accessToken,
                        },
                    }
                );
                console.log(res.data);
                setProducts(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchOrders();
    }, []);


    const handleDelete = async (id) => {
        try {
            // Make an HTTP request to delete the item with the given ID
            await axios.delete(`http://localhost:5000/product/deleteProduct/${id}`, {
                headers: {
                    token: "Bearer " + accessToken,
                },
            });

            // Update the darziInfo state by filtering out the deleted item
            setProducts((prevInfo) => prevInfo.filter((item) => item._id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="warehouseBox">
            <div className="info">
                <h4>
                    {" "}
                    <a href="/wh-manager/">
                        <FaChevronLeft />
                        Warehouse Manageries
                    </a>
                </h4>
                <hr></hr>
            </div>

            {products && products.map((item, index) => {
                return (
                    <div className="infoCard" key={index}>
                        <div className="Pimage">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="warehousename">
                            <label>{item.name}</label>
                        </div>
                        <div className="totalOrders infoBox">
                            <label>Total Orders</label>
                            <span>{item.totalOrders}</span>
                        </div>
                        <div className="infoBox">
                            <label>Orders Completed: </label>
                            <span>{item.price}</span>
                        </div>
                        <div className="infoBox">
                            <label>Pending Orders: </label>
                            <span>{item.countInStock}</span>
                        </div>
                        <div className="viewitem">
                            <a
                                href={`/wh-manager/edit?item=${encodeURIComponent(JSON.stringify(item._id))}`}
                            >
                                View More <FaChevronRight />
                            </a>
                        </div>
                        <div className="deleteBox">
                            <button className="deleteButton" onClick={(e) => { handleDelete(item._id) }}>
                                Delete <GrTrash />
                            </button>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default ManageWH;
