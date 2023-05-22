
import { AuthContext } from '../../../context/authContext/AuthContext';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import React, { useContext, useEffect, useState } from "react";
import "./Tailor.css";
import Map from "../Maps/Map";

const tailors = [
  {
    id: 1,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKDJ4mF5M_JMtbwiVQ_FK3qRB_Zma20YIeLamqETuyoeSpoqfOynWr9Z8XH3P55Xz_oo&usqp=CAU",
    name: "Baari Tailors",
    description: "Baari Tailors, is in the industry since 1908.",
    price: 1099,
    lat: 24.910461453474166,
    lng: 67.18585718599024
  },
  {
    id: 2,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRIc9_1kP9L5V-Gl4dejhvIxNoIwcafKpjGq6kPPkIJMPsj1VWvPqkPP2QcEtTkBJwaU&usqp=CAU",
    name: "Sartoria Tailors",
    description: "Situated in the heart of Karachi, providing quality.",
    price: 1599,
    lat: 24.90702119736485,
    lng: 66.93327386632889
  },
  {
    id: 3,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsThTe1pLqospIFkZXCz6A-xxk2ARSxjaDXZP2kvSdDiwhhXCoQI7Mo3Ul6GwfhcbAfPc&usqp=CAU",
    name: "Knockout Tailors",
    description: "Best choice for your special occasions.",
    price: 2099,

    lat: 24.939374858646556,
    lng: 67.15580543228663
  }
];

const TailorCard = ({ tailor, onTailorClick }) => (
  <div className="tailor-card" onClick={() => onTailorClick(tailor)}>
    <img src={tailor.imageSrc} alt={tailor.name} />
    <div className="tailor-card-info">
      <h3>{tailor.name}</h3>
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
      <img src={tailor.imageSrc} alt={tailor.name} />
      <div className="tailor-details-info">
        <h2>{tailor.name}</h2>
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


  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/getAllTailors", {
          headers: {
            token: "Bearer " + accessToken,
          },
        });
        setTailorInfo(res.data);
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

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
      <div className="tailor-list">
        {tailors.map((tailor) => (
          <TailorCard key={tailor.id} tailor={tailor} onTailorClick={handleTailorClick} />
        ))}
      </div>
      {selectedTailor && (
        <TailorDetails tailor={selectedTailor} onClose={handleTailorClose} cloth={cloth} />
      )}

      <div>
        <Map tailors={tailors} />
      </div >
    </div>


  );
};

export default Tailor;