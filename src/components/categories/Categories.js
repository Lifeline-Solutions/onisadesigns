import React from 'react';
import './Categories.css';
import kijani from '../../assets/images/kijani.png';
import doworrio from '../../assets/images/smalldo.png';
import onisa from '../../assets/images/Oonisa.png';

const Categories = () => (
  <div className="container" style={{ marginTop: '50px' }}>
    <div
      className="cards"
      style={{
        backgroundImage: `url(${onisa})`,
        backgroundPosition: 'center',
        objectFit: 'contain',
        backgroundRepeat: 'no-repeat',
        objectPosition: 'center center',
      }}
    >
      <span />
      <span />
      <span />
    </div>

    <div
      className="cards"
      style={{
        backgroundImage: `url(${doworrio})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'contain',
      }}
    >
      <span />
      <span />
      <span />
    </div>

    <div
      className="cards"
      style={{
        backgroundImage: `url(${kijani})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <span />
      <span />
      <span />
    </div>
  </div>
);

export default Categories;
