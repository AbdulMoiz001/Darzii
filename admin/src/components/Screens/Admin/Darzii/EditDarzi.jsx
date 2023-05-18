import { useNavigate } from 'react-router-dom';

import { useState, React, useEffect } from 'react'
import "./css/EditDarzi.css";
import axios from 'axios';
import { FaChevronLeft } from 'react-icons/fa';
import Map from '../../Maps/Map';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../../context/authContext/AuthContext';






function EditDarzi() {

    const navigate = useNavigate();



    const location = useLocation();
    const propString = new URLSearchParams(location.search).get("item");
    const o_data = JSON.parse(decodeURIComponent(propString));



    const [DarziCoordinates, setDarziCoordinates] = useState(null);


    const { user } = useContext(AuthContext);

    const accessToken = user.accessToken;

    const [formData, setFormData] = useState({});
    useEffect(() => {
        setFormData(o_data);
        const { lat, lng } = formData;
        setDarziCoordinates({ lat, lng });


    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = async (event, id) => {
        event.preventDefault();
        try {
            console.log(id);
            const res = await axios.post(
                `http://localhost:5000/user/updateTailor/${id}`,
                formData,  // Move the formData here
                {
                    headers: {
                        token: "Bearer " + accessToken,
                    },
                }
            );

            navigate('/darzii/users');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {

        setFormData(DarziCoordinates ? (prevFormData) => ({
            ...prevFormData,
            lat: DarziCoordinates["lat"],
            lng: DarziCoordinates["lng"],
        }) : o_data);

    }, [DarziCoordinates]);

    return (
        <div className='DarziInfoBox'>
            <form onSubmit={(event) => handleSubmit(event, formData._id)}>
                <h2> <a href="/darzii/users">

                    <FaChevronLeft />
                </a>
                </h2>

                <h1>Darzii Registration Form: </h1>
                <h2>Tailor ID: {formData.TailorID}</h2>
                <table>
                    <tr>
                        <td>
                            <label htmlFor="firstName">First Name</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <label htmlFor="lastName">Last Name</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="email">Email</label>
                        </td>
                        <td>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <label htmlFor="password">Password</label>
                        </td>
                        <td>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value=""
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="phone">Phone</label>
                        </td>
                        <td>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <label htmlFor="cnic">CNIC</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="cnic"
                                id="cnic"
                                value={formData.cnic}
                                onChange={handleChange}
                                ondou
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label htmlFor="address">Address</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </td>
                        <td>
                            <label htmlFor="skill">Skill</label>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="skill"
                                id="skill"
                                value={formData.skill}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <button type="submit">Submit</button>
                    </tr>
                </table>

                <Map DarziCoordinates={DarziCoordinates}
                    setDarziCoordinates={setDarziCoordinates} />
            </form>


        </div>
    )
}

export default EditDarzi