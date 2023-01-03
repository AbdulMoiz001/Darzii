import React, { useState } from 'react';
import './Main.css';
import AreaDropdown from './Areas';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: '',
    email: '',
    password: '',
    phone: '',
    area: ''
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
              <div className="signupCard">
                  <h2 className="title">Create an Account <span className='tagline'>Or instead</span> </h2>
                  <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col">
                            <div className="group">
                                <label className="formLabel" >first name</label>
                                <input
                                  className="inputStyle"
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="group">
                                <label className="formLabel">last name</label>
                                <input
                                  className="inputStyle"
                                  type="text"
                                  name="lastName"
                                  value={formData.lastName}
                                  onChange={handleChange}
                                />
                            </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                            <div className="group">
                                <label className="formLabel">Birthday</label>
                                <input
                                  className="inputStyle"
                                  type="date"
                                  name="dob"
                                  value={formData.dob}
                                  onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="group">
                                <label className="formLabel">Gender</label>
                                <div className="radioDiv">
                                    <label className="radio-container m-r-45">Male
                                      <input
                                        type="radio"
                                        checked={formData.gender === 'male'}
                                        name="gender"
                                        value="male"
                                        onChange={handleChange}
                                      />
                                      <span className="checkmark"></span>
                                    </label>
                                    <label className="radio-container">Female
                                      <input
                                        type="radio"
                                        checked={formData.gender === 'female'}
                                        name="gender"
                                        value="female"
                                        onChange={handleChange}
                                      />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                      </div>
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
                      <div className="row">
                        <div className="col">
                            <div className="group">
                                <label className="formLabel" >Phone Number</label>
                                <input
                                  className="inputStyle"
                                  type="text"
                                  name="phone"
                                  value={formData.phone}
                                  onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="col">
                            <div className="group">
                                <label className="formLabel">Area</label>
                                    <AreaDropdown/>
                            </div>
                        </div>
                      </div>
                      <div className="buttonDiv">
                            <button className="btn-form changeColor" type="submit">Create</button>
                      </div>
                    </form>
              </div>
  );
}

export default SignupForm;