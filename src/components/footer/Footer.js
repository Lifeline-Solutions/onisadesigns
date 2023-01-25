import React from 'react';
import './Footer.css';

import image from '../../assets/images/shieldnew.png';

const Footer = () => (
  <div>
    <footer className="footer">
      <div className="footer__text">
        <p>@2022 Onisa Designs limited. All rights reserved.</p>
      </div>
      <div
        className="footer__logo d-flex justify-content-end"
        style={{ margin: '0 10px' }}
      >
        <img src={image} alt="stock" />
      </div>
    </footer>
  </div>
);
export default Footer;
