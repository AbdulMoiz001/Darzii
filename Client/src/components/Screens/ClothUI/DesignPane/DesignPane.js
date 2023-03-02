import React from 'react';
import ModelViewer from './ModelViewer/ModelViewer';
import './DesignPane.css';

function DesignPane() {
  return (
    <div className='DesignPane'>
      <ModelViewer/>
      <button className='cuiNext'>Next &raquo;</button>
    </div>
  )
}

export default DesignPane;