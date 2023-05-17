import React, { useContext, useState } from 'react';
import "./css/SignInAdmin.css";
import { login } from "../../../context/authContext/apiCalls";
import { AuthContext } from "../../../context/authContext/AuthContext";

const SignInAdmin = () => {

    const { dispatch } = useContext(AuthContext);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(formData, dispatch);
        window.location.reload();
    };

    return (
        <>
            <h1>Admin SignIn</h1>
            <div className='SignInBox' >
                <form className='SignInForm' onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />

                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />

                    <button type="submit" disabled={dispatch}>SignIn</button>
                </form>
            </div>
        </>
    );
};

export default SignInAdmin;
