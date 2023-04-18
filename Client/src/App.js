import React from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import StoreScreen from './components/Screens/Store/StoreScreen';
import Gateway from './components/Screens/Signup/Gateway';
import ClothUI from './components/Screens/ClothUI/ClothUI';
import MeasurementForm from './components/Screens/ClothUI/Measurements/MeasurementForm';
import Tailor from './components/Screens/Tailor/Tailor';
import OrderCreation from './components/Screens/Tailor/OrderCreation/OrderCreation';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='Store' element={<StoreScreen/>}/>
            <Route path='Try' element={<Gateway/>}/>
            <Route path='ClothUI' element={<ClothUI/>}/>
            <Route path='MeasurementForm' element={<MeasurementForm/>}/>
            <Route path='Tailor' element={<Tailor/>}/>
            <Route path='OrderCreation' element={<OrderCreation/>}/>
          </Routes>
    </div>
  );
}

export default App;
