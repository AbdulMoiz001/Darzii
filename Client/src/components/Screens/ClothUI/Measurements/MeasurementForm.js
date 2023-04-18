import React, { useState } from 'react';
import './MeasurementForm.css';

function MeasurementForm() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [chest, setChest] = useState('');
  const [waist, setWaist] = useState('');
  const [hips, setHips] = useState('');
  const [shoulder, setShoulder] = useState('');
  const [sleeves, setSleeves] = useState('');
  const [neck, setNeck] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log('Form submitted:', {
      height,
      weight,
      chest,
      waist,
      hips,
      shoulder,
      sleeves,
      neck
    });
  };

  return (
    <>
      <form className="measurement-form" onSubmit={handleSubmit}>
        <h2>Body Measurements</h2>
        <div className="form-group">
          <label htmlFor="height">Height (cm):</label>
          <input type="number" id="height" name="height" value={height} onChange={(e) => setHeight(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input type="number" id="weight" name="weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="chest">Chest (cm):</label>
          <input type="number" id="chest" name="chest" value={chest} onChange={(e) => setChest(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="waist">Waist (cm):</label>
          <input type="number" id="waist" name="waist" value={waist} onChange={(e) => setWaist(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="hips">Hips (cm):</label>
          <input type="number" id="hips" name="hips" value={hips} onChange={(e) => setHips(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="shoulder">Shoulder (cm):</label>
          <input type="number" id="shoulder" name="shoulder" value={shoulder} onChange={(e) => setShoulder(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="sleeves">Sleeves (cm):</label>
          <input type="number" id="sleeves" name="sleeves" value={sleeves} onChange={(e) => setSleeves(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="neck">Neck (cm):</label>
          <input type="number" id="neck" name="neck" value={neck} onChange={(e) => setNeck(e.target.value)} required />
        </div>
        <div className="form-group">
          <button type="submit" className='measurement-form-next'>Next &raquo;</button>
        </div>
      </form>
      <div className='footer'></div>
    </>
  );
}

export default MeasurementForm;