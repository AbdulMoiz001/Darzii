import React, { useState } from 'react';
import './Form.css';

const WHManagerForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cinc: '',
        address: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit formData to backend or do something else with it
    };

    return (
        <div className='formCard WHM'>
            <form onSubmit={handleSubmit}>
            <h1>Warehouse Manager Registration Form</h1>
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
                </tr>
                <tr>
                <button type="submit">Submit</button>
                </tr>
                </table>
            </form>
        </div>
    );

};

export default WHManagerForm;