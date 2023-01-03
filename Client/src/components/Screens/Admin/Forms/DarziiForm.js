import React, { useState } from 'react';
import { AreaDropdownBlack } from '../../Signup/Areas';
import './Form.css';

const DarziiForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        cinc: '',
        address: '',
        skill: '',
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
        <div className='formCard D'>
            <form onSubmit={handleSubmit}>
            <h1>Darzii Registration Form</h1>
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
                <td>
                <label htmlFor="area">Area</label>
                </td>
                <td>
                <AreaDropdownBlack/>
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

export default DarziiForm;