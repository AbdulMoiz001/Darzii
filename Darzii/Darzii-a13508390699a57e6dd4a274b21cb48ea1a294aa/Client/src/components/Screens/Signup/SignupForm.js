import React, { useState } from 'react';
import './Main.css';
import Areas from './Areas';
import axios from 'axios';

function SignupForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [formSubmitStatus, setFormSubmitStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = {
        firstName,
        lastName,
        dob,
        gender,
        email,
        password,
        phone,
        area: selectedArea
      };
      const response = await axios.post('http://localhost:5000/auth/registerUser', formData);
      console.log(response);
      setFormSubmitStatus('success');
      setFirstName('');
      setLastName('');
      setDob('');
      setGender('');
      setEmail('');
      setPassword('');
      setPhone('');
      setSelectedArea('');
    } catch (error) {
      setFormSubmitStatus('error');
    }
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/auth/registerUser", 
  //        formData);
  //       console.log(res);
  //   } catch (err) {
  //     console.log(err);
      
  //   }
  // }

  const renderFormSubmitStatus = () => {
    if (formSubmitStatus === 'success') {
      alert("Account Created Successfully!");
    } else if (formSubmitStatus === 'error') {
      return alert("There was an Error Creating Account!");
    }
  }

  return (
    <>
    {renderFormSubmitStatus()}
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
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
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
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
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
                value={dob}
                onChange={(event) => setDob(event.target.value)}
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
                    checked={gender === 'male'}
                    name="gender"
                    value="male"
                    onChange={(event) => setGender(event.target.value)}
                  />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Female
                  <input
                    type="radio"
                    checked={gender === 'female'}
                    name="gender"
                    value="female"
                    onChange={(event) => setGender(event.target.value)}
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
        <div className="row">
          <div className="col">
            <div className="group">
              <label className="formLabel" >Phone Number</label>
              <input
                className="inputStyle"
                type="text"
                name="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="group">
              <label className="formLabel">Area</label>
              <select className='selectInput' name="area" value={selectedArea} onChange={(event) => setSelectedArea(event.target.value)}>
                <option value="" disabled selected>* Select an Area</option>
                {Areas.map((area) => (
                  <option key={area.value} value={area.value}>
                    {area.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <button className="btn-form changeColor" type="submit">Create</button>
        </div>
      </form>
    </div>
    </>
  );
}

export default SignupForm;
