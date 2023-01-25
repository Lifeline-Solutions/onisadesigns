import React from 'react';
import './Categories.css';
import image from '../../assets/images/gloves2.jpg';
import kijani from '../../assets/images/kijani.png';
import doworrio from '../../assets/images/smalldo.png';
import rates3 from '../../assets/images/Revinyo.png';
import onisa from '../../assets/images/logosmall.png';

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
