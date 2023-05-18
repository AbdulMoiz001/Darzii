import React, { useState } from 'react';
import './DesignPane.css';

function DesignPane({ 
  beltStyle, 
  cuffsStyle, 
  bottomStyle, 
  trouserStyle, 
  stitchStyle, 
  collarStyle, 
  sleevesStyle, 
  shoulderStyle, 
  neckStyle, 
  lacingStyle, 
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageSrc, setPopupImageSrc] = useState('');

  const handleImageClick = (src) => {
    setShowPopup(true);
    setPopupImageSrc(src);
  }

  const Popup = ({ imageSrc, onClose }) => (
    <div className="popup">
      <div className="popup-content">
        <img src={imageSrc} alt={imageSrc} />
        <button className="popup-close" onClick={onClose}>X</button>
      </div>
    </div>
  );

  return (
    <div className='DesignPane'>
      {showPopup && <Popup imageSrc={popupImageSrc} onClose={() => setShowPopup(false)} />}
      <table>
        <tr>
          <td className='pic_holder' id='beltStyle' onClick={() => handleImageClick(beltStyle)}>
            Belt Style
          </td>
          <td className='pic_holder' id='collarStyle' onClick={() => handleImageClick(collarStyle)}>
            Collar Style
          </td>
        </tr>
        <tr>
          <td className='pic_holder' id='cuffsStyle' onClick={() => handleImageClick(cuffsStyle)}>
            Cuffs Style
          </td>
          <td className='pic_holder' id='sleevesStyle' onClick={() => handleImageClick(sleevesStyle)}>
            Sleeves Style
          </td>
        </tr>
        <tr>
          <td className='pic_holder' id='bottomStyle' onClick={() => handleImageClick(bottomStyle)}>
            Bottom Style
          </td>
          <td className='pic_holder' id='shoulderStyle' onClick={() => handleImageClick(shoulderStyle)}>
            Shoulder Style
          </td>
        </tr>
        <tr>
          <td className='pic_holder' id='trouserStyle' onClick={() => handleImageClick(trouserStyle)}>
            Trouser Style
          </td>
          <td className='pic_holder' id='neckStyle' onClick={() => handleImageClick(neckStyle)}>
            Neck Style
          </td>
        </tr>
        <tr>
          <td className='pic_holder' id='stitchStyle' onClick={() => handleImageClick(stitchStyle)}>
            Stitch Style
          </td>
          <td className='pic_holder' id='lacingStyle' onClick={() => handleImageClick(lacingStyle)}>
            Lacing Style
          </td>
        </tr>
      </table>
      <a className='cuiNext' href='MeasurementForm'>Next &raquo;</a>
    </div>
  )
}

export default DesignPane;

// import ModelViewer from './ModelViewer/ModelViewer';
// <ModelViewer/>