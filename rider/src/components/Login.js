import React from 'react'
import { login } from "../context/authContext/apiCalls.jsx";
import './Login.css'
import { FaEnvelope, FaLock } from 'react-icons/fa'
import { useState } from 'react';

import { AuthContext } from "../context/authContext/AuthContext.jsx"
import { useContext, useNavigate } from 'react';
const Login = () => {

    const { dispatch } = useContext(AuthContext);


    const [email, setEmail] = useState();
    const [password, setpassword] = useState();



    const handleLogin = async (event) => {

        event.preventDefault();
        const formData = {
            email,
            password,
        };

        try {
            await login(formData, dispatch);
        } catch (error) {
            alert('Wrong Credentials. Please try again!');
        }

    };

    return (
        <div className="container-fluid page">
            <div className='centralize'>
                <div className="wrapper ">
                    <div className="form-box login">
                        <h2>
                            Darzii Express
                        </h2>
                        <form action="#" method="post" className='login-form'>
                            <div className="input-box">
                                <span className="icon"><FaEnvelope /></span>
                                <input type="text" name="" id="" required onChange={(e) => {
                                    setEmail(e.target.value);
                                }} />
                                <label >Email</label>
                            </div>

                            <div className="input-box">
                                <span className="icon">
                                    <FaLock />
                                </span>
                                <input type="password" name="" id="" required onChange={(e) => {
                                    setpassword(e.target.value);
                                }} />
                                <label >password</label>
                            </div>
                            <div className="remember-forgot">
                                <a href="#">Forget Password?</a>
                            </div>
                            <div className="d-grid gap-2">
                                <button class="login-btn" type="button" onClick={handleLogin}>Login</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Login