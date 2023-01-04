import React, { useState } from 'react';
import { AreaDropdownBlack } from '../../Signup/Areas';
import './Form.css';
import axios from 'axios';

const DarziiForm = () => {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjA4NDNlYjFhZjhlYTIxMzJkMTA0YyIsInJvbGVzIjpbInVzZXIiLCJhZG1pbiJdLCJpYXQiOjE2NzI3NTg4NDMsImV4cCI6MTY3MjkzMTY0M30.l2nqHDaDaHY9tBSNy2jeHlKSX_ONHoOOnxXr69DBpvY";
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        try {
            const res = await axios.post(
              "http://localhost:5000/auth/registerDarzi", 
               formData,
               {
                headers:{
                    token: "Bearer " + accessToken
                }
               }
               );
              console.log(res);
          } catch (err) {
            console.log(err);
            
          }     
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