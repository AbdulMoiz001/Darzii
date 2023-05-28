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
    <div className="appointment-form">
      <h2>Appointment Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="appointmentDate">Appointment Date:</label>
          <input
            type="date"
            id="appointmentDate"
            name="AppointmentDate"
            value={appointmentData.AppointmentDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            id="startTime"
            name="StartTime"
            value={appointmentData.StartTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">End Time:</label>
          <input
            type="time"
            id="endTime"
            name="EndTime"
            value={appointmentData.EndTime}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointments;