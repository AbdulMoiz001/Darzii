import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./OrderCreation.css";

const clothingTypes = ["Shirt", "Pants", "Suit", "Dress"];

const options = [
    {
        id: 1,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 1",
        description: "Lorem ipsum dolor sit amet",
        price: 1099
    },
    {
        id: 2,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 2",
        description: "Consectetur adipiscing elit",
        price: 1599
    },
    {
        id: 3,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 3",
        description: "Sed do eiusmod tempor incididunt",
        price: 2099
    }
];

const OptionCard = ({ option, onOptionClick, selected }) => (
    <div
        className={`option-card ${selected ? "selected" : ""}`}
        onClick={() => onOptionClick(option)}
    >
        <img src={option.imageSrc} alt={option.title} />
        <div className="option-card-info">
            <h3>{option.title}</h3>
            <p>{option.description}</p>
            <h3>Price: ${option.price}</h3>
        </div>
        {selected && <span className="checkmark">&#10003;</span>}
    </div>
);

const OrderCreation = () => {
    const location = useLocation();
    const propString = new URLSearchParams(location.search).get('tailor');
    const tailor = JSON.parse(decodeURIComponent(propString));
    const [clothingType, setClothingType] = useState(clothingTypes[0]);
    const [showSlider, setShowSlider] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleClothingTypeChange = (event) => {
        setClothingType(event.target.value);
        setShowSlider(event.target.value === "Shirt");
        setShowDropdown(event.target.value !== "Shirt");
        setSelectedOption(null);
    };

    const handleOptionClick = (option) => {
        if (selectedOption && selectedOption.id === option.id) {
            setSelectedOption(null);
        } else {
            setSelectedOption(option);
        }
    };
    
    return (
        <div className="order-creation">
            <h1>Create Order</h1>
            <div className="order-form">
                <div className="form-row">
                    <label htmlFor="tailor">Tailor:</label>
                    <h2 className="tailor-title">{tailor.name}</h2>
                </div>
                <div className="form-row">
                    <label htmlFor="clothing-type">Clothing Type:</label>
                    <select
                        id="clothing-type"
                        value={clothingType}
                        onChange={handleClothingTypeChange}
                    >
                        {clothingTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                {showSlider && (
                    <div className="form-row">
                        <div className="option-slider">
                            {options.map((option) => (
                                <OptionCard
                                    key={option.id}
                                    option={option}
                                    onOptionClick={handleOptionClick}
                                    selected={selectedOption && selectedOption.id === option.id}
                                />
                            ))}
                        </div>
                    </div>
                )}
                {showDropdown && (
                    <div className="form-row">
                        <label htmlFor="option">Option:</label>
                        <select
                            id="option"
                            value={selectedOption ? selectedOption.id : ""}
                            onChange={(event) =>
                                setSelectedOption(
                                    options.find((o) => o.id === parseInt(event.target.value))
                                )
                            }
                        >
                            <option value="">Select an option...</option>
                            {options.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.title}
                                </option>
                            ))}
                        </select>
                    </div>
                )}
                {selectedOption && (
                    <div className="form-row">
                        <div className="selected-option">
                            <img src={selectedOption.imageSrc} alt={selectedOption.title} />
                            <div className="option-info">
                                <h3>{selectedOption.title}</h3>
                                <p>{selectedOption.description}</p>
                                <h3>Price: Rs.{selectedOption.price}</h3>
                            </div>
                        </div>
                    </div>
                )}
                <div className="form-row">
                    <button className="submit-button" onClick={() => alert("Order submitted!")}>
                        Submit Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderCreation;                