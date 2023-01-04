import React, { useState } from 'react';
import './Main.css';
import axios from 'axios';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const res = await axios.post(
          "http://localhost:5000/auth/loginUser", 
           formData);
          console.log(res);
      } catch (err) {
        console.log(err);
        
      }
  }


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
                                value={formData.email}
                                onChange={handleChange}
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
                                value={formData.password}
                                onChange={handleChange}
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