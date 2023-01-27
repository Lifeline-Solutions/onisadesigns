import React from 'react';
import './Footer.css';

import image from '../../assets/images/Shieldd.png';

const Footer = () => (
  <div>
    <footer className="footer d-flex justify-content-between">
      <div className="footer__text w-50">
        <p>@2022 Onisa Designs limited. All rights reserved.</p>
      </div>
      <div
        className="footer__logo d-flex justify-content-end mr-0 pr-0"
        style={{ margin: '0 10px' }}
      >
        <img src={image} alt="stock" />
      </div>
    </footer>
  </div>
);
export default Footer;
