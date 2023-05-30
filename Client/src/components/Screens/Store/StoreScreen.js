import React, { useState } from "react";
import './StoreScreen.css';
import Sidebar from "./Sidebar";
import Store from "./Store";

const ClothDetails = ({ cloth, onClose }) => {

    const scloth = { ...cloth, image: undefined, }
    console.log(scloth);

    return (
        <div className="cloth-details-overlay">
            <div className="cloth-details">
                <button className="close-btn" onClick={onClose}>
                    X
                </button>
                <img src={cloth.image} alt={cloth.name} />
                <div className="cloth-details-info">
                    <h2>{cloth.name}</h2>
                    <p>{cloth.description}</p>
                    <h3>Rs.{cloth.price}</h3>
                    <h4>Rated {cloth.rating}/5, {cloth.reviews} Reviews</h4>
                    <h4>Availabilty: {cloth.availability ? "In Stock" : "Out of Stock"}</h4>
                    {cloth.availability && <div className="btn-group">
                        <a className="book-btn" href={`Tailor?cloth=${encodeURIComponent(JSON.stringify(scloth))}`}>Buy Now</a>
                    </div>}
                </div>
            </div>
        </div>
    );
}

function StoreScreen() {
    const [filter, setFilter] = useState('all');
    const [selectedCloth, setSelectedCloth] = useState(null);

    const handleClothClick = (cloth) => {
        setSelectedCloth(cloth);
    }

    const handleClothClose = () => {
        setSelectedCloth(null);
    }

    return (
        <div className="StoreScreen"><Sidebar setFilter={setFilter} /><Store filter={filter} onClothClick={handleClothClick} />
            {
                selectedCloth && (
                    <ClothDetails cloth={selectedCloth} onClose={handleClothClose} />
                )}
        </div>
    );
}

export default StoreScreen;