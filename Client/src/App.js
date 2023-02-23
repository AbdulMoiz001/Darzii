import React from "react";
import Navbar from "./components/Navbar/UserNavbar01/Navbar";
import Home from "./components/Screens/Home/Home";
import StoreScreen from "./components/Screens/Store/StoreScreen";
import Gateway from "./components/Screens/Signup/Gateway";
import Settings from "./components/Screens/UserSettings/Settings";
import "./App.css";
import ClothUi from "./components/Screens/ClothUi/ClothUi";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Settings /> */}
      {/* <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="Store" element={<StoreScreen />} />
        <Route path="Try" element={<Gateway />} />
      </Routes> */}
      <ClothUi />
    </div>
  );
}

export default App;
