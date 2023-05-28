import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import DeliveryRequest from './components/DeliveryRequest';
import Navbar from './components/Navbar';
import Deliveries from './components/Deliveries';
import DeliveryMenu from './components/DeliveryMenu';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        {/* container for cards having a dummy data for delivery request, and a child component for showing the demo data */}
        <Route path='requests' element={<DeliveryRequest/>}/>
        {/* clickable delivery request to accept the delivery data */}
        <Route path='deliveries' element={<Deliveries/>}/>
        {/* a map section to show where the delivery is to be made by the rider. */}
        <Route path='delivery' element={<DeliveryMenu/>}/>
      </Routes>
            
    </>
  );
}

export default App;
