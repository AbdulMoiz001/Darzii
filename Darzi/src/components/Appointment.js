import axios from "axios"
import React, { useContext, useEffect, useState } from 'react';
import './Appointment.css';
import AppointmentsData from './AppointmentsData';
import { FaTimes, FaCheck } from 'react-icons/fa';
import { AuthContext } from '../context/authContext/AuthContext';


function Appointment() {


  //DATA FROM THE DATA BASE IS IN THE FOLOOWING!!!!
  const [appointmentsData, setAppointmentsData] = useState({});


  const { user } = useContext(AuthContext);
  const accessToken = user ? user.accessToken : "";

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/darzi/getAppointments",
          {
            headers: {
              token: "Bearer " + accessToken,
            },
          });
        setAppointmentsData(res.data);
        console.log(res.data);
      } catch (error) {
      }
    };

    fetchOrders();
  }, []);




  const [selectedOption, setSelectedOption] = useState('All');
  const [Appointments, setAppointments] = useState(AppointmentsData);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const accept = (AppointmentID) => {
    // Find the index of the appointment in the list
    const appointmentIndex = Appointments.findIndex(appointment => appointment.AppointmentID === AppointmentID);

    if (appointmentIndex !== -1) {
      // Create a copy of the appointment object
      const updatedAppointment = { ...Appointments[appointmentIndex] };

      // Update the status of the appointment
      updatedAppointment.AppointmentStatus = 'Scheduled';

      // Create a new array with the updated appointment
      const updatedAppointments = [...Appointments];
      updatedAppointments[appointmentIndex] = updatedAppointment;

      // Set the updated appointment list in the state
      setAppointments(updatedAppointments);
    }
    console.log(Appointments);
  };

  const reject = (AppointmentID) => {
    // Find the index of the appointment in the list
    const appointmentIndex = Appointments.findIndex(appointment => appointment.AppointmentID === AppointmentID);

    if (appointmentIndex !== -1) {
      // Create a copy of the appointment object
      const updatedAppointment = { ...Appointments[appointmentIndex] };

      // Update the status of the appointment
      updatedAppointment.AppointmentStatus = 'Declined';

      // Create a new array with the updated appointment
      const updatedAppointments = [...Appointments];
      updatedAppointments[appointmentIndex] = updatedAppointment;

      // Set the updated appointment list in the state
      setAppointments(updatedAppointments);
    }
    console.log(Appointments);
  };

  return (
    <div className="appointment">
      <div>
        <div className="appointment-page-title">{selectedOption} Appointments</div>
        <div className="appointment-radio-buttons">
          {/* Radio buttons for filtering options */}
          <label className='appointment-radio-container'>
            <input
              type="checkbox"
              name="option"
              value="All"
              checked={selectedOption === "All"}
              onChange={handleOptionChange}
            />
            <span className="appointment-radio-checkmark"></span>
            All
          </label>
          <label className='appointment-radio-container'>
            <input
              type="checkbox"
              name="option"
              value="Scheduled"
              checked={selectedOption === "Scheduled"}
              onChange={handleOptionChange}
            />
            <span className="appointment-radio-checkmark"></span>
            Scheduled
          </label>
          <label className="appointment-radio-container">
            <input
              type="checkbox"
              name="option"
              value="Completed"
              checked={selectedOption === "Completed"}
              onChange={handleOptionChange}
            />
            <span className="appointment-radio-checkmark"></span>
            Completed
          </label>
        </div>
      </div>
      <div className="appointment-TableData scrollable">
        {/* Table for displaying filtered appointments */}
        <table className="appointment-table">
          <thead>
            <tr>
              <th>Appointment ID</th>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Customer Contact</th>
              <th>Appointment Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Appointments.map((appointment) => {
              if (appointment.AppointmentStatus === selectedOption || (selectedOption === "All" && (appointment.AppointmentStatus === "Scheduled" || appointment.AppointmentStatus === "Completed"))) {
                return (
                  <tr key={appointment.AppointmentID}>
                    <td>{appointment.AppointmentID}</td>
                    <td>{appointment.CustomerID}</td>
                    <td>{appointment.CustomerName}</td>
                    <td>{appointment.CustomerContactNumber}</td>
                    <td>{appointment.AppointmentDate}</td>
                    <td>{appointment.StartTime}</td>
                    <td>{appointment.EndTime}</td>
                    <td>{appointment.AppointmentStatus}</td>
                  </tr>
                );
              }
              else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
      <div className='appointment-incoming-title'>
        Incoming Appointments
      </div>
      <div className='incoming-appointments scrollable'>
        {Appointments.filter(appointment => appointment.AppointmentStatus === 'Incoming').map(appointment => (
          <div className="appointment-card" key={appointment.AppointmentID}>
            <div className="appointment-card-info">
              <div className="appointment-card-title">Appointment ID: {appointment.AppointmentID}</div>
              <div className="appointment-card-details">
                <div>Customer ID: {appointment.CustomerID}</div>
                <div>Customer Name: {appointment.CustomerName}</div>
                <div>Customer Contact: {appointment.CustomerContactNumber}</div>
                <div>Appointment Date: {appointment.AppointmentDate}</div>
                <div>Start Time: {appointment.StartTime}</div>
                <div>End Time: {appointment.EndTime}</div>
                <div className='appointment-card-operation'>
                  <FaCheck
                    onClick={() => accept(appointment.AppointmentID)}
                    style={{ color: 'green', cursor: 'pointer', paddingRight: '15px' }}
                  />
                  <FaTimes
                    onClick={() => reject(appointment.AppointmentID)}
                    style={{ color: 'red', cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointment;