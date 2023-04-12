import React, { useState, useEffect } from 'react';
import './Title.css';


function Title(){
    const [t_size, setTitleSize] = useState(180);
    const [iColor, setIColor] = useState("#ebebeb");
    const [iShadowColor, setIShadowColor] = useState("#b393d3");
    
    useEffect(() => {
        setTimeout(() => {
            let current_size = t_size;
            if(current_size === 180)
                setTitleSize(200);
            else
                setTitleSize(180);
        }, 1000);
        setTimeout(() => {
            let current_color = iColor;
            if(current_color === "#ebebeb")
                setIColor("black");
            else
                setIColor("#ebebeb");
        }, 1000);
        setTimeout(() => {
            let current_color = iShadowColor;
            if(current_color === "#b393d3")
                setIShadowColor("rgb(231, 173, 12)");
            else
                setIShadowColor("#b393d3");
        }, 1000);
    });
    
    let titleSize = `${t_size}px`;
    let iShadow = `0px 0px 5px ${iShadowColor}, 0px 0px 10px ${iShadowColor}, 0px 0px 10px ${iShadowColor}, 0px 0px 20px ${iShadowColor}`
    
    const TitleSize = {
        fontSize: titleSize
    };

    const i_Color = {
        color: iColor,
        textShadow: iShadow
    };

    return(
        <div className='HomeTitle'>
            Welcome! to <div className='Heading'> <h1 style={TitleSize}> <span style={i_Color}>Darzii</span> </h1> </div>
            <div className='HomeIntro'>
                An ultimate soltution to all of your clothing needs.
            </div>
        </div>
    );
}

export default Title;