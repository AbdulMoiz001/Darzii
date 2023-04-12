import React, { useState } from 'react';
import './Panels.css';

function LeftPanel() {
    const [beltStyle, setBeltStyle] = useState('');
    const [cuffsStyle, setCuffsStyle] = useState('');
    const [bottomStyle, setBottomStyle] = useState('');
    const [trouserStyle, setTrouserStyle] = useState('');
    const [stitchStyle, setStitchStyle] = useState('');

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

    return (
        <div className="dropdown-menu Panel LeftPanel">
            <div className="dropdown-item">
                <label htmlFor="belt-style">Belt Style:</label>
                <select id="belt-style" value={beltStyle} onChange={handleBeltChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="cuffs-style">Cuffs Style:</label>
                <select id="cuffs-style" value={cuffsStyle} onChange={handleCuffsChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="bottom-style">Bottom Style:</label>
                <select id="bottom-style" value={bottomStyle} onChange={handleBottomChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="trouser-style">Trouser Style:</label>
                <select id="trouser-style" value={trouserStyle} onChange={handleTrouserChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="stitch-style">Stitch Style:</label>
                <select id="stitch-style" value={stitchStyle} onChange={handleStitchChange}>
                    <option value="">Select an option</option>
                    <option value="style 01">Style 01</option>
                    <option value="style 02">Style 02</option>
                    <option value="style 03">Style 03</option>
                </select>
            </div>
        </div>
    )
}

export default LeftPanel;