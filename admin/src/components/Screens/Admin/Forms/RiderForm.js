import React, { useContext, useState } from 'react';
import './Form.css';
import axios from 'axios';
import { AuthContext } from '../../../../context/authContext/AuthContext';

const RiderForm = () => {
    const { user } = useContext(AuthContext);

    const accessToken = user.accessToken;

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cinc: '',
        address: '',
        vehicleMake: '',
        vehicleModel: '',
        vehicleReg: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(
                "http://localhost:5000/auth/registerRider",
                formData,
                {
                    headers: {
                        token: "Bearer " + accessToken
                    }
                }
            );
            // console.log(res);
            window.location.reload();
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <div className='formCard'>
            <form onSubmit={handleSubmit}>
                <h1>Rider Registration Form</h1>
                <table>
                    <tbody>

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
                                    value={formData.password}
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
                                <label htmlFor="vehicleMake">Vehicle Make</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="vehicleMake"
                                    id="vehicleMake"
                                    value={formData.vehicleMake}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="vehicleModel">Vehicle Model</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="vehicleModel"
                                    id="vehicleModel"
                                    value={formData.vehicleModel}
                                    onChange={handleChange}
                                />
                            </td>
                            <td>
                                <label htmlFor="vehicleReg">Vehicle Reg. No.</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="vehicleReg"
                                    id="vehicleReg"
                                    value={formData.vehicleReg}
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RiderForm;