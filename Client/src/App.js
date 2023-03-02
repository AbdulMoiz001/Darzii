<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar/UserNavbar01/Navbar";
import Home from "./components/Screens/Home/Home";
import StoreScreen from "./components/Screens/Store/StoreScreen";
import Gateway from "./components/Screens/Signup/Gateway";
import Settings from "./components/Screens/UserSettings/Settings";
import "./App.css";
import { Route, Routes } from "react-router-dom";
=======
import React from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import StoreScreen from './components/Screens/Store/StoreScreen';
import Gateway from './components/Screens/Signup/Gateway';
import ClothUI from './components/Screens/ClothUI/ClothUI';
import './App.css';
import { Route, Routes } from 'react-router-dom';
>>>>>>> cc6dd6d (On the day)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Settings /> */}
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Store" element={<StoreScreen />} />
        <Route path="Try" element={<Gateway />} />
      </Routes>
=======
          <Navbar/>
          <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='Store' element={<StoreScreen/>}/>
            <Route path='Try' element={<Gateway/>}/>
            <Route path='ClothUI' element={<ClothUI/>}/>
          </Routes>
>>>>>>> cc6dd6d (On the day)
    </div>
  );
}

export default App;
