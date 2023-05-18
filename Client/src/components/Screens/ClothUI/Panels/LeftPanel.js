import React from 'react';
import './Panels.css';

function LeftPanel({
    beltStyle,
    cuffsStyle,
    bottomStyle,
    trouserStyle,
    stitchStyle,
    handleBeltChange,
    handleCuffsChange,
    handleBottomChange,
    handleTrouserChange,
    handleStitchChange
}){
    return (
        <div className="dropdown-menu Panel LeftPanel">
            <div className="dropdown-item">
                <label htmlFor="belt-style">Belt Style:</label>
                <select id="belt-style" value={beltStyle} onChange={handleBeltChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Full_Elastic_Belt.png">Full Elastic</option>
                    <option value="/ClothUI/Half_Elastic_Belt.png">Half Elastic</option>
                    <option value="/ClothUI/With_Loops_Belt.png">With Loops</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="cuffs-style">Cuffs Style:</label>
                <select id="cuffs-style" value={cuffsStyle} onChange={handleCuffsChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Balloon_Style_Cufflings.png">Balloon Style</option>
                    <option value="/ClothUI/Cuffling_Style_Cufflings.png">Cuffling Style</option>
                    <option value="/ClothUI/Umbrella_Style_Cufflings.png">Umbrella Style</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="bottom-style">Bottom Style:</label>
                <select id="bottom-style" value={bottomStyle} onChange={handleBottomChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/A_Line_Bottom.png">A-Line</option>
                    <option value="/ClothUI/Round_Bottom.png">Round</option>
                    <option value="/ClothUI/Straight_Bottom.png">Straight</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="trouser-style">Trouser Style:</label>
                <select id="trouser-style" value={trouserStyle} onChange={handleTrouserChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Bell_Bottom_Trouser.png">Bell Bottom</option>
                    <option value="/ClothUI/Flapper_Trouser.png">Flapper</option>
                    <option value="/ClothUI/Straight_Trouser.png">Straight</option>
                </select>
            </div>
            <div className="dropdown-item">
                <label htmlFor="stitch-style">Stitch Style:</label>
                <select id="stitch-style" value={stitchStyle} onChange={handleStitchChange}>
                    <option value="">Select an option</option>
                    <option value="/ClothUI/Angrakha_Style_Stitching.png">Angrakha Style</option>
                    <option value="/ClothUI/Coat_Style_Stitching.png">Coat Style</option>
                    <option value="/ClothUI/Frock_Style_Stitching.png">Frock Style</option>
                </select>
            </div>
        </div>
    )
}

export default LeftPanel;