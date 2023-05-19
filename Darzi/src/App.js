import axios from "axios"
import Dashboard from './components/Dashboard';
import Payments from './components/Payments';
import Login from './components/Login';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import logo from './components/Images/logo.png'
import { FaSignOutAlt } from 'react-icons/fa';
import Orders from './components/Orders';
import Order from './components/Order';
import IncomingOrders from './components/IncomingOrders';
import Tailors from './components/TailorsData';
import { FaUser } from "react-icons/fa";
import Profile from './components/Profile';
import OrdersData from './components/OrdersData';
import NewOrders from './components/PendingOrdersData';
import Appointment from './components/Appointment';

import { AuthContext } from './context/authContext/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const accessToken = user.accessToken;
  const accessToken = user ? user.accessToken : "";


  //Orders DATA will be in orderData
  const [orderData, setOrderData] = useState([{}]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/order/getOrdersForTailor",
          {
            headers: {
              token: "Bearer " + accessToken,
            },
          });
        setOrderData(res.data);
      } catch (error) {
      }
    };

    fetchOrders();
  }, []);



  const [Tailor, setTailor] = useState();

  const handleLogout = () => {
    localStorage.removeItem("tailor")
    navigate('/');
    window.location.reload();
  };

  const openProfile = () => {
    navigate('/profile');
  };

  return (
    <div className='darzi'>
      <div className="top-bar">
        {user && <button className="profile-button" onClick={openProfile}>
          <FaUser className="profile-icon" />
          {user.userName}
        </button>}
        <a href={'/'}><img src={logo} alt="Logo" className='logo' /></a>
        {user && <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          Logout
        </button>}
      </div>
      <div className='main'>
        {user && <Sidebar />}
        <Routes>
          {
            !user && <Route path="/" element={<Login />} />
          }

          {user &&
            <>
              <Route path="/" element={<Dashboard Orders={orderData} NewOrders={NewOrders} />} />
              <Route path="/profile" element={<Profile tailor={user} />} />
              <Route path="/orders" element={<Orders Orders={orderData} />} />
              <Route path="/payments" element={<Payments Orders={orderData.filter(order => order.OrderStatus === 'Dispatched')} />} />
              <Route path="/order" element={<Order />} />
              <Route path="/incoming-orders" element={<IncomingOrders NewOrders={orderData.filter(order => order.OrderStatus === 'Pending')} />} />
              <Route path="/appointment" element={<Appointment />} />
            </>
          }
        </Routes>
      </div>
    </div>
  );
};

export default App;