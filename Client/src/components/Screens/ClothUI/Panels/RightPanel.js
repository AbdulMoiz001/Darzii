import React, { useState } from 'react';
import './Panels.css';

function RightPanel() {
    const [collarStyle, setCollarStyle] = useState('');
    const [sleevesStyle, setSleevesStyle] = useState('');
    const [shoulderStyle, setShoulderStyle] = useState('');
    const [neckStyle, setNeckStyle] = useState('');
    const [lacingStyle, setLacingStyle] = useState('');

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

    return (
        <div className="dropdown-menu Panel RightPanel">
            <div className="dropdown-item">
                <label htmlFor="collar-style">Collar Style:</label>
                <select id="collar-style" value={collarStyle} onChange={handleCollarChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="sleeves-style">Sleeves Style:</label>
                <select id="sleeves-style" value={sleevesStyle} onChange={handleSleevesChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="shoulder-style">Shoulder Style:</label>
                <select id="shoulder-style" value={shoulderStyle} onChange={handleShoulderChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="neck-style">Neck Style:</label>
                <select id="neck-style" value={neckStyle} onChange={handleNeckChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="lacing-style">Lacing Style:</label>
                <select id="lacing-style" value={lacingStyle} onChange={handleLacingChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
        </div>
    )
}

export default RightPanel;