import React, { useState, useEffect } from 'react';
import './Slideshow.css';

function Slideshow() {
    const [imageId, setImageId] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            let currentImageId = imageId;
            setImageId(currentImageId + 1);
        }, 3000);
    });
    
    const totalImages = 4;
    
    let imgURL = "url(./SlideshowImages/" + ((imageId) % totalImages) + ".png)";
    
    const imgStyle = {
        backgroundImage: imgURL
    };

    return(
        <div className='Slideshow' style={imgStyle}>
            
        </div>
    );
}

export default Slideshow;