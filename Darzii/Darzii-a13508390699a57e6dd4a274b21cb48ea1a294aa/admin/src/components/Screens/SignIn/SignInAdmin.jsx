import React, { useState } from 'react';
import "./css/SignInAdmin.css";

const SignInAdmin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add form validation and submit data to server
    };

    return (
        <>
            <h1>Admin SignIn</h1>
            <div className='SignInBox'>
                <form className='SignInForm' onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

                    <button type="submit">SignIn</button>
                </form>
            </div>
        </>
    );
};

export default SignInAdmin;
