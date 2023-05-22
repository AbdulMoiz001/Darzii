import React, { useContext, useState, useEffect } from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import StoreScreen from './components/Screens/Store/StoreScreen';
import Gateway from './components/Screens/Signup/Gateway';
import ClothUI from './components/Screens/ClothUI/ClothUI';
import MeasurementForm from './components/Screens/ClothUI/Measurements/MeasurementForm';
import Profile from './components/Screens/Home/Profile';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/authContext/AuthContext';
import SINavbar from './components/Navbar/UserNavbarSignedIn/SignedInNavBar';
import Tailor from './components/Screens/Tailor/Tailor';
import OrderCreation from './components/Screens/Tailor/OrderCreation/OrderCreation';
import Cart from './components/Screens/Cart';
import Checkout from './components/Screens/Checkout';
import Orders from './components/Screens/Orders';
import Order from './components/Screens/Order';
import Appointments from './components/Screens/Appointments';
import Stripe from './components/Screens/Stripe/Stripe';

function App() {
  const { user } = useContext(AuthContext);

  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    // Retrieve cart item count from cache
    const cachedCartItemCount = localStorage.getItem('cartItemCount');
    const initialCartItemCount = cachedCartItemCount ? parseInt(cachedCartItemCount) : 0;
    setCartItemCount(initialCartItemCount);
  }, []);

  const handleCartItemCountChange = (count) => {
    setCartItemCount(count);
  };

  return (
    <div className="App">
      {user ? <SINavbar cartItemCount={cartItemCount} /> : <Navbar />}

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Store' element={<StoreScreen />} />
          <Route path='/Try' element={<Gateway />} />
          <Route path='/ClothUI' element={<ClothUI />} />
          <Route path='/MeasurementForm' element={<MeasurementForm />} />
          {user ? <Route path='/Profile' element={<Profile />} /> : <></>}
          <Route path='/Tailor' element={<Tailor />} />
          <Route path='/OrderCreation' element={<OrderCreation />} />
          <Route path='/Cart' element={<Cart onCartItemCountChange={handleCartItemCountChange} />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Order' element={<Order />} />
          <Route path='/Appointments' element={<Appointments />} />
          <Route path='/Stripe' element={<Stripe />} />
        </Routes>
      </AuthContextProvider>
    </div >
  );
}

export default App;
