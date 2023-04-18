import React, { useState } from 'react';
import axios from 'axios';
import './Main.css';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        const formData = {
            email,
            password
        };
        event.preventDefault();
        try {
            const res = await axios.post(
            "http://localhost:5000/auth/loginUser", 
            formData);
            const AccessToken = res.data.accessToken;
            console.log(AccessToken);
        } catch (err) {
            console.log(err);
            
        }
    };
      

    return (
        <div className="loginCard">
            <h2 className="title">Login to Darzii <span className='tagline'>Or instead</span> </h2>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <div className="group">
                            <label className="formLabel" >Email</label>
                            <input
                                className="inputStyle"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col">
                        <div className="group">
                            <label className="formLabel">Password</label>
                            <input
                                className="inputStyle"
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className="buttonDiv">
                    <button className="btn-form changeColor" type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;