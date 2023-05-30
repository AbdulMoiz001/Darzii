import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import DeliveryRequest from './components/DeliveryRequest';
import Navbar from './components/Navbar';
import Deliveries from './components/Deliveries';
import DeliveryMenu from './components/DeliveryMenu';
import { AuthContext } from './context/authContext/AuthContext';
import { useContext } from 'react';
function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <Navbar />}
      <Routes>
        {
          !user && <Route path="/" element={<Login />} />
        }
        {
          user &&
          <>
            <Route path='/' element={<DeliveryRequest />} />
            <Route path='/deliveries' element={<Deliveries />} />
          </>
        }

      </Routes>

    </>
  );
}

export default App;
