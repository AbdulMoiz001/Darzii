import React, { useState } from 'react';
import './Appointments.css';

const Appointments = () => {
  const [appointmentData, setAppointmentData] = useState({
    AppointmentDate: '',
    StartTime: '',
    EndTime: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the appointment data, such as sending a request
    console.log(appointmentData);
    // Reset the form
    setAppointmentData({
      AppointmentDate: '',
      StartTime: '',
      EndTime: ''
    });
  };

  return (
    <div className="card">
    <div className="gateway">

    <div className="wrapper">
    
    <div className="loginCard">
      <h2 className="title">
        Appointment Request
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="group">
              <label className="formLabel">Email</label>
              <input
              className="inputStyle"
            type="time"
            name="StartTime"
            value={appointmentData.StartTime}
            onChange={handleInputChange}
            required
          />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col">
            <div className="group">
              <label className="formLabel">Password</label>
              <input
              className="inputStyle"
            type="time"
            
            name="EndTime"
            value={appointmentData.EndTime}
            onChange={handleInputChange}
            required
          />
            </div>
          </div>
          </div>
          <div className="row">
          <div className="col">
            <div className="group">
              <label className="formLabel">Password</label>
              <input
            className="inputStyle"
            type="time"
            
            name="EndTime"
            value={appointmentData.EndTime}
            onChange={handleInputChange}
            required
          />
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <button className="btn-form changeColor" type="submit" >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Appointments;