import React from 'react';
import './ClothUI.css';
import RightPanel from './Panels/RightPanel';
import LeftPanel from './Panels/LeftPanel';
import DesignPane from './DesignPane/DesignPane';

function ClothUI(){
  return (
    <div className='ClothUI'>
      <LeftPanel/>
      <DesignPane/>
      <RightPanel/>
    </div>
  )
}

export default ClothUI;