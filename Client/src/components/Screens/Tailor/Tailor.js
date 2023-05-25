
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import "./Tailor.css";
import Map from "../Maps/Map";


const TailorCard = ({ tailor, onTailorClick }) => (
  <div className="tailor-card" onClick={() => onTailorClick(tailor)}>
    <img src={`data:image/png;base644, ${tailor.imageSrc}`} alt={tailor.tailorName} />
    <div className="tailor-card-info">
      <h3>{tailor.tailorName}</h3>
      <p>{tailor.description}</p>
    </div>
  </div>
);


const TailorDetails = ({ tailor, onClose, cloth }) => (
  <div className="tailor-details-overlay">
    <div className="tailor-details">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <img src={tailor.imageSrc} alt={tailor.tailorName} />
      <div className="tailor-details-info">
        <h2>{tailor.tailorName}</h2>
        <p>{tailor.description}</p>
        <h3>Starts at: Rs.{tailor.price}</h3>
        <div className="btn-group">
          <a className="book-btn" href={`OrderCreation?order=${encodeURIComponent(JSON.stringify({
            tailor: { ...tailor },
            cloth: { ...cloth }
          }))}`}>Book Now</a>
        </div>
      </div>
    </div>
  </div>
);

const Tailor = () => {

  const { user } = useContext(AuthContext);
  const accessToken = user ? user.accessToken : "";

  const [tailorsInfo, setTailorInfo] = useState([]);
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/getTailors", {
          headers: {
            token: "Bearer " + accessToken,
          },
        });
        const updatedData = res.data.map((tailor) => ({
          ...tailor,
          price: Number(tailor.price),
          lat: Number(tailor.lat),
          lng: Number(tailor.lng),
        }));

        setTailorInfo(updatedData);
        console.log(tailorsInfo);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTailors();
  }, []);

  //______________________________________________________________________________
  //------------USER LOCATION----------------------------------------------------
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.log(error.message);
        }
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }, []);
  //------------USER LOCATION----------------------------------------------------

  //------------------------------------------------------radius-----------------------------------------------------
  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  const [radius, setRadius] = useState(5);
  const handleRadiusChange = (e) => {
    setRadius(e.target.value)
  }
  const tailorsWithinRadius = userLocation ? tailorsInfo.filter((tailor) => {
    const distance = calculateDistance(
      userLocation.lat,
      userLocation.lng,
      tailor.lat,
      tailor.lng
    );
    return distance <= radius;
  }) : null;
  //------------------------------------------------------radius-----------------------------------------------------
  //______________________________________________________________________________



  const location = useLocation();
  const cloth = JSON.parse(decodeURIComponent(new URLSearchParams(location.search).get('cloth')));

  const [selectedTailor, setSelectedTailor] = useState(null);

  const handleTailorClick = (tailor) => {
    setSelectedTailor(tailor);
  };

  const handleTailorClose = () => {
    setSelectedTailor(null);
  };

  return (
    <div className="Tailor">
      <h1>Tailors</h1>
      <div className='radiusNum'>
        <label>1</label>
        <input type='range' min='1' max='51' step='5' value={radius} onChange={e => handleRadiusChange(e)} />
        <label>50</label>
      </div>
      <div className="tailor-list">
        {tailorsInfo.map((tailor) => (
          <TailorCard key={tailor._id} tailor={tailor} onTailorClick={handleTailorClick} />
        ))}
      </div>
      {selectedTailor && (
        <TailorDetails tailor={selectedTailor} onClose={handleTailorClose} cloth={cloth} />
      )}

      <div>
        <Map userLocation={userLocation} tailorsWithinRadius={tailorsWithinRadius} radius={radius} />
      </div >
    </div>


  );
};

export default Tailor;