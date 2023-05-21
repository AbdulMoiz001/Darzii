import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./OrderCreation.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
    },
    {
        id: 4,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 4",
        description: "Duis aute irure dolor in reprehenderit in voluptate",
        price: 1399
    },
    {
        id: 5,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 5",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        price: 1899
    },
    {
        id: 6,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 6",
        description: "Duis aute irure dolor in reprehenderit in voluptate",
        price: 1299
    },
    {
        id: 7,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 7",
        description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        price: 2199
    },
    {
        id: 8,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 8",
        description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur",
        price: 1799
    },
    {
        id: 9,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 9",
        description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit",
        price: 2499
    },
    {
        id: 10,
        imageSrc: "https://via.placeholder.com/150",
        title: "Option 10",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
        price: 2999
    }
];

const CartDummyData = [
    {
        OrderID: 1,
        OrderType: "store_purchase",
        ItemID: 123,
        ItemTitle: "Shirt",
        TailorID: null,
        TailorName: null,
        Size: "Large",
        Measurements: {
            height: null,
            weight: null,
            chest: null,
            waist: null,
            hips: null,
            shoulder: null,
            sleeves: null,
            neck: null
        },
        ClothUI: null,
        Design: null,
        Catalogue: null,
        CatalogueID: null,
        Price: 100,
        Title: "Trendy Shirt"
    },
    {
        OrderID: 2,
        OrderType: "store_purchase_with_stitching",
        ItemID: 456,
        ItemTitle: "Cloth",
        TailorID: 123,
        TailorName: "Elegant Tailors",
        Size: null,
        Measurements: {
            height: 5,
            weight: 5,
            chest: 5,
            waist: 5,
            hips: 5,
            shoulder: 5,
            sleeves: 5,
            neck: 5
        },
        ClothUI: true,
        Design: {
            beltStyle: "Style 01",
            cuffsStyle: "Style 02",
            bottomStyle: "Style 03",
            trouserStyle: "Style 01",
            stitchStyle: "Style 02",
            collarStyle: "Style 03",
            sleevesStyle: "Style 01",
            shoulderStyle: "Style 02",
            neckStyle: "Style 03",
            lacingStyle: "Style 01"
        },
        Catalogue: false,
        CatalogueID: null,
        Price: 2000,
        Title: "Store Purchase with Stitching Item"
    },
    {
        OrderID: 3,
        OrderType: "store_purchase_with_stitching",
        ItemID: 456,
        ItemTitle: "Cloth",
        TailorID: 123,
        TailorName: "Elegant Tailors",
        Size: null,
        Measurements: {
            height: 5,
            weight: 5,
            chest: 5,
            waist: 5,
            hips: 5,
            shoulder: 5,
            sleeves: 5,
            neck: 5
        },
        ClothUI: false,
        Design: {
            beltStyle: null,
            cuffsStyle: null,
            bottomStyle: null,
            trouserStyle: null,
            stitchStyle: null,
            collarStyle: null,
            sleevesStyle: null,
            shoulderStyle: null,
            neckStyle: null,
            lacingStyle: null
        },
        Catalogue: true,
        CatalogueID: 254,
        Price: 3000,
        Title: "Store Purchase with Stitching Item"
    }
];


const OptionCard = ({ option, onOptionClick, selected }) => (
    <div
        className={`option-card ${selected ? "selected" : ""}`}
        onClick={() => onOptionClick(option)}
    >
        {selected && <span className="checkmark">&#10003;</span>}
        {!selected && <span className="checkmark">&nbsp;</span>}
        <img src={option.imageSrc} alt={option.title} />
        <div className="option-card-info">
            <div>{option.title}</div>
            <div>Price: Rs.{option.price}</div>
        </div>
    </div>
);

const OrderCreation = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const propString = new URLSearchParams(location.search).get('order');
    const order = JSON.parse(decodeURIComponent(propString));
    const [clothingType, setClothingType] = useState(null);
    const [showSlider, setShowSlider] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showForm, setShowForm] = useState(false)

    useEffect(()=>{
        console.log(order);
    },[])

    const handleClothingTypeChange = (event) => {
        setClothingType(event.target.value);
        setShowSlider(clothingTypes.includes(event.target.value));
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
            <div className="form-row">
                <label htmlFor="tailor">Tailor:</label>
                <h2 className="tailor-title">{order[0].name}</h2>
            </div>
            <div className="order-form">
                {!showForm && (
                    <>
                        <div className="form-row">
                            Do you want to make a custom order using ClothUI or select a design from the tailor's Catalogue ?
                        </div>
                        <div>
                            <a className="button" href={`ClothUI?order=${encodeURIComponent(JSON.stringify(order))}`}>
                                ClothUI
                            </a>
                            <button className="button" onClick={() => setShowForm(true)}>
                                Catalogue
                            </button>
                        </div>
                    </>
                )
                }
                {showForm &&
                    (
                        <>
                            <div className="form-row">
                                <label htmlFor="clothing-type">Clothing Type:</label>
                                <select
                                    id="clothing-type"
                                    value={clothingType}
                                    onChange={handleClothingTypeChange}
                                >
                                    <option value="" disabled selected>Select an Option</option>
                                    {clothingTypes.map((type) => (
                                        <option value={type}>
                                            {type}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {showSlider && (
                                <div className="form-row">
                                    <div className="option-slider scrollable">
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
                                <button className="submit-button" onClick={() => {
                                    navigate("/MeasurementForm");
                                }}>
                                    Submit Order
                                </button>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default OrderCreation;                