import React, { useState } from "react";
import "./Tailor.css";
import Map from "../Maps/Map";

const tailors = [
  {
    id: 1,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFKDJ4mF5M_JMtbwiVQ_FK3qRB_Zma20YIeLamqETuyoeSpoqfOynWr9Z8XH3P55Xz_oo&usqp=CAU",
    name: "Baari Tailors",
    description: "Baari Tailors, is in the industry since 1908.",
    price: 1099,
    lat: 24.4234872984,
    lng: 26.9384209820
  },
  {
    id: 2,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjRIc9_1kP9L5V-Gl4dejhvIxNoIwcafKpjGq6kPPkIJMPsj1VWvPqkPP2QcEtTkBJwaU&usqp=CAU",
    name: "Sartoria Tailors",
    description: "Situated in the heart of Karachi, providing quality.",
    price: 1599,
    lat: 24.4234872984,
    lng: 26.9384209820
  },
  {
    id: 3,
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsThTe1pLqospIFkZXCz6A-xxk2ARSxjaDXZP2kvSdDiwhhXCoQI7Mo3Ul6GwfhcbAfPc&usqp=CAU",
    name: "Knockout Tailors",
    description: "Best choice for your special occasions.",
    price: 2099,
    lat: 24.4234872984,
    lng: 26.9384209820
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


const TailorDetails = ({ tailor, onClose }) => (
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
          <a className="book-btn" href={`OrderCreation?tailor=${encodeURIComponent(JSON.stringify(tailor))}`}>Book Now</a>
        </div>
      </div>
    </div>
  </div>
);

const Tailor = () => {
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
        <TailorDetails tailor={selectedTailor} onClose={handleTailorClose} />
      )}

      <div>
        <Map tailors={tailors} />
      </div >
    </div>


  );
};

export default Tailor;