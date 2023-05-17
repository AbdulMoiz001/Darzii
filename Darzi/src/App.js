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

  const [Username, setUsername] = useState(() => {
    const storedUsername = localStorage.getItem('Username');
    return storedUsername === null ? '' : JSON.parse(storedUsername);
  });

  const [loginStatus, setLoginStatus] = useState(() => {
    const storedStatus = localStorage.getItem('loginStatus');
    return storedStatus === null ? false : JSON.parse(storedStatus);
  });

  const [Tailor, setTailor] = useState();

  useEffect(() => {
    localStorage.setItem('loginStatus', JSON.stringify(loginStatus));
  }, [loginStatus]);

  useEffect(() => {
    localStorage.setItem('Username', JSON.stringify(Username));
    setTailor(Tailors.find(tailor => tailor.Username === Username));
  }, [Username]);

  const handleLogout = () => {
    setLoginStatus(false); navigate('/');
  };

  const openProfile = () => {
    navigate('profile');
  };

  return (
    <div className='darzi'>
      <div className="top-bar">
        {loginStatus && <button className="profile-button" onClick={openProfile}>
          <FaUser className="profile-icon" />
          {Username}
        </button>}
        <a href={'/'}><img src={logo} alt="Logo" className='logo' /></a>
        {loginStatus && <button className="logout-button" onClick={handleLogout}>
          <FaSignOutAlt className="logout-icon" />
          Logout
        </button>}
      </div>
      <div className='main'>
        {loginStatus && <Sidebar />}
        <Routes>
          {
            !loginStatus && <Route path="/" element={<Login setLoginStatus={setLoginStatus} setUsername={setUsername} />} />
          }

          {loginStatus &&
            <>
              <Route path="/" element={<Dashboard Orders={OrdersData} NewOrders={NewOrders} />} />
              <Route path="profile" element={<Profile tailor={Tailor} />} />
              <Route path="orders" element={<Orders Orders={OrdersData} />} />
              <Route path="payments" element={<Payments Orders={OrdersData.filter(order => order.OrderStatus === 'Dispatched')} />} />
              <Route path="order" element={<Order />} />
              <Route path="incoming-orders" element={<IncomingOrders NewOrders={NewOrders} />} />
              <Route path="appointment" element={<Appointment />} />
            </>
          }
        </Routes>
      </div>
    </div>
  );
};

export default App;