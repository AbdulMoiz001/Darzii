import React, { useState } from 'react';
import './Main.css';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit the form data (contained in formData) to the server
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