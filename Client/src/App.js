import React, { useContext } from 'react';
import Navbar from './components/Navbar/UserNavbar01/Navbar';
import Home from './components/Screens/Home/Home';
import StoreScreen from './components/Screens/Store/StoreScreen';
import Gateway from './components/Screens/Signup/Gateway';
import ClothUI from './components/Screens/ClothUI/ClothUI';
import MeasurementForm from './components/Screens/ClothUI/Measurements/MeasurementForm';
<<<<<<< HEAD
import Tailor from './components/Screens/Tailor/Tailor';
import OrderCreation from './components/Screens/Tailor/OrderCreation/OrderCreation';
=======
import Blank from './components/Screens/Home/Blank'
>>>>>>> a74fb2f1727549f9517f38e776c25dab100af88a
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from './context/authContext/AuthContext';
import SINavbar from './components/Navbar/UserNavbarSignedIn/SignedInNavBar';



function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
<<<<<<< HEAD
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
=======
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
>>>>>>> a74fb2f1727549f9517f38e776c25dab100af88a
  );
}

export default App;
