import React from 'react';
import './Panels.css';

function RightPanel({ 
    collarStyle, 
    sleevesStyle, 
    shoulderStyle, 
    neckStyle, 
    lacingStyle, 
    handleCollarChange, 
    handleSleevesChange, 
    handleShoulderChange, 
    handleNeckChange, 
    handleLacingChange 
}){
    return (
        <div className="dropdown-menu Panel RightPanel">
            <div className="dropdown-item">
                <label htmlFor="collar-style">Collar Style:</label>
                <select id="collar-style" value={collarStyle} onChange={handleCollarChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Notched_Collar.png">Notched</option>
                    <option value="/ClothUI/Sherwani_Collar.png">Sherwani</option>
                    <option value="/ClothUI/Shirt_Collar.png">Shirt</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="sleeves-style">Sleeves Style:</label>
                <select id="sleeves-style" value={sleevesStyle} onChange={handleSleevesChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Bell_Shaped_Sleeves.png">Bell Shaped</option>
                    <option value="/ClothUI/Loose_Bell_Shaped_Sleeves.png">Loose Bell Shaped</option>
                    <option value="/ClothUI/Straight_Sleeves.png">Straight</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="shoulder-style">Shoulder Style:</label>
                <select id="shoulder-style" value={shoulderStyle} onChange={handleShoulderChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Balloon_Shoulder.png">Balloon</option>
                    <option value="/ClothUI/Cut_Shoulder.png">Cut</option>
                    <option value="/ClothUI/Normal_Shoulder.png">Normal</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="neck-style">Neck Style:</label>
                <select id="neck-style" value={neckStyle} onChange={handleNeckChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Boat_Neck.png">Boat</option>
                    <option value="/ClothUI/Round_Neck.png">Round</option>
                    <option value="/ClothUI/Square_Neck.png">Square</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="lacing-style">Lacing Style:</label>
                <select id="lacing-style" value={lacingStyle} onChange={handleLacingChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Center_Lace.png">Center</option>
                    <option value="/ClothUI/Inside_Lace.png">Inside</option>
                    <option value="/ClothUI/Outside_Lace.png">Outside</option>
                </select>
            </div>
        </div>
    )
}

export default RightPanel;