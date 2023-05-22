import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './ClothUI.css';
import RightPanel from './Panels/RightPanel';
import LeftPanel from './Panels/LeftPanel';
import DesignPane from './DesignPane/DesignPane';
import { AuthContext } from '../../../context/authContext/AuthContext';

const OrderDetails = ({ tailor }) => (
  <div className='Header'>
    <span>Order for: </span><span className='tailorName'>{tailor.name}</span>
  </div>
);

function ClothUI() {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const propString = new URLSearchParams(location.search).get('order');
  const order = JSON.parse(decodeURIComponent(propString));
  const navigate = useNavigate();

  const [beltStyle, setBeltStyle] = useState('Belt Style');
  const [cuffsStyle, setCuffsStyle] = useState('Cuffs Style');
  const [bottomStyle, setBottomStyle] = useState('Bottom Style');
  const [trouserStyle, setTrouserStyle] = useState('Trouser Style');
  const [stitchStyle, setStitchStyle] = useState('Stitch Style');
  const [collarStyle, setCollarStyle] = useState('Collar Style');
  const [sleevesStyle, setSleevesStyle] = useState('Sleeves Style');
  const [shoulderStyle, setShoulderStyle] = useState('Shoulder Style');
  const [neckStyle, setNeckStyle] = useState('Neck Style');
  const [lacingStyle, setLacingStyle] = useState('Lacing Style');

  function handleBeltChange(event) {
    setBeltStyle(event.target.value);
  }

  function handleCuffsChange(event) {
    setCuffsStyle(event.target.value);
  }

  function handleBottomChange(event) {
    setBottomStyle(event.target.value);
  }

  function handleTrouserChange(event) {
    setTrouserStyle(event.target.value);
  }

  function handleStitchChange(event) {
    setStitchStyle(event.target.value);
  }

  function handleCollarChange(event) {
    setCollarStyle(event.target.value);
  }

  function handleSleevesChange(event) {
    setSleevesStyle(event.target.value);
  }

  function handleShoulderChange(event) {
    setShoulderStyle(event.target.value);
  }

  function handleNeckChange(event) {
    setNeckStyle(event.target.value);
  }

  function handleLacingChange(event) {
    setLacingStyle(event.target.value);
  }

  function sendToMeasurements() {
    console.log("Function Called");
    const cachedCartItems = localStorage.getItem('cartItems');
    const initialCartItems = cachedCartItems ? JSON.parse(cachedCartItems) : [];
    const orderData = {
      local_orderID: initialCartItems.length,
      clothID: order[1].productID,
      clothPrice: order[1].price,
      clothImage: order[1].imgSrc,
      orderType: "ClothUI",
      userID: user._id,
      userEmail: user.email,
      tailorID: order[0].id,
      tailorName: order[0].name,
      price: (order[0].price + order[1].price),
      tailorImage: order[0].imageSrc,
      design: {
        beltStyle,
        cuffsStyle,
        bottomStyle,
        trouserStyle,
        stitchStyle,
        collarStyle,
        sleevesStyle,
        shoulderStyle,
        neckStyle,
        lacingStyle,
      }
    }
    navigate(`/MeasurementForm?orderData=${encodeURIComponent(JSON.stringify(orderData))}`);
  }

  return (
    <div className='ClothUI'>
      <OrderDetails tailor={order[0]} />
      <div className='main'>
        <LeftPanel beltStyle={beltStyle} cuffsStyle={cuffsStyle} bottomStyle={bottomStyle} trouserStyle={trouserStyle} stitchStyle={stitchStyle} handleBeltChange={handleBeltChange} handleCuffsChange={handleCuffsChange} handleBottomChange={handleBottomChange} handleTrouserChange={handleTrouserChange} handleStitchChange={handleStitchChange} />
        <DesignPane beltStyle={beltStyle} cuffsStyle={cuffsStyle} bottomStyle={bottomStyle} trouserStyle={trouserStyle} stitchStyle={stitchStyle} collarStyle={collarStyle} sleevesStyle={sleevesStyle} shoulderStyle={shoulderStyle} neckStyle={neckStyle} lacingStyle={lacingStyle}/>
        <RightPanel collarStyle={collarStyle} sleevesStyle={sleevesStyle} shoulderStyle={shoulderStyle} neckStyle={neckStyle} lacingStyle={lacingStyle} handleCollarChange={handleCollarChange} handleSleevesChange={handleSleevesChange} handleShoulderChange={handleShoulderChange} handleNeckChange={handleNeckChange} handleLacingChange={handleLacingChange} />
        <button className='cuiNext' onClick={sendToMeasurements}>Next &raquo;</button>
      </div>
    </div>
  )
}

export default ClothUI;