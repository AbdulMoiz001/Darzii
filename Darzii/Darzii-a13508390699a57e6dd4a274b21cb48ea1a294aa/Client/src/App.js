import React, { useContext } from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import StoreScreen from './components/Screens/Store/StoreScreen';
import Gateway from './components/Screens/Signup/Gateway';
import ClothUI from './components/Screens/ClothUI/ClothUI';
import MeasurementForm from './components/Screens/ClothUI/Measurements/MeasurementForm';
import Blank from './components/Screens/Home/Blank'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/authContext/AuthContext';
import SINavbar from './components/Navbar/UserNavbarSignedIn/SignedInNavBar';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
      {user ? <SINavbar /> : <Navbar />}

      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Store' element={<StoreScreen />} />
          <Route path='/Try' element={<Gateway />} />
          <Route path='/ClothUI' element={<ClothUI />} />
          <Route path='/MeasurementForm' element={<MeasurementForm />} />
          {user ? <Route path='/blank' element={<Blank />} /> : <></>}
        </Routes>
      </AuthContextProvider>
    </div >
  );
}

export default App;
