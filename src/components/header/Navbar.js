import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';

import logo from '../../assets/images/onis.png';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState('nav-menu');
  const [toggleItem, setToggleItem] = useState('nav-toggler');

  const toggleMenu = () => {
    if (active === 'nav-menu') {
      setActive('nav-menu nav-active');
    } else {
      setActive('nav-menu');
    }

    if (toggleItem === 'nav-toggler') {
      setToggleItem('nav-toggler toggle');
    } else {
      setToggleItem('nav-toggler');
    }
  };
  return (
    <nav className="nav">
      <div className="logo-div">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="icons">
        <div className="number-icon">
          <div className="phone-icon">
            <BiPhoneCall className="p-icon" />
            <span className="number">+254 700 000 000</span>
          </div>

          <div className="column-icon">
            <HiOutlineMail />
            <span className="email">onisadesigns@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="nav-links">
        <ul className={active}>
          <li className="nav-item">Kijani</li>
          <li className="nav-item">Kijani</li>
          <li className="nav-item">Kijani</li>
        </ul>
      </div>

      <div className={toggleItem} onClick={toggleMenu}>
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </div>
    </nav>
  );
};

export default Navbar;
