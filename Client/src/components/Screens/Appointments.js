import React, { useState } from 'react';
import './Appointments.css';
import { useLocation } from 'react-router-dom';

const Appointments = () => {
  const location = useLocation();
  const order = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('order')));

  const [appointmentData, setAppointmentData] = useState({
    CustomerID:  order.CustomerID,
    TailorID: order.TailorID,
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
      CustomerID:  order.CustomerID,
      TailorID: order.TailorID,
      AppointmentDate: '',
      StartTime: '',
      EndTime: ''
    });
  };

  return (
    <div className="appointment-card">
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
                    <label className="formLabel">Appointment Date:</label>
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
                    <label className="formLabel">Start Time:</label>
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
                    <label className="formLabel">End Time:</label>
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