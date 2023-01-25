import React from 'react';
import './Loader.css';
import image from '../../assets/images/Shield.png';

const Loader = () => (
  <div className="spinner-container">
    <img src={image} alt="Loading..." className="spinner" />
  </div>
);

export default Loader;
