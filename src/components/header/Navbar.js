import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';

import logo from '../../assets/images/onis.png';
import spear from '../../assets/images/spear.png';
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

  const toggleSpear = (e) => {
    const spear = e.target.parentElement.children[1];
    if (spear.classList.contains('hidden')) {
      spear.classList.remove('hidden');

      setTimeout(() => {
        spear.classList.add('hidden');
      }, 1000);
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
            <a href="tel:+254700000000" className="phone">
              <BiPhoneCall className="p-icon" />
              <span className="number">+254 700 000 000</span>
            </a>
          </div>

          <div className="column-icon">
            <HiOutlineMail />
            <span className="email">onisadesigns@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="nav-links">
        <ul className={active}>
          <div className="spear-div" onClick={toggleSpear}>
            <li className="nav-item"> Kijani</li>
            <img src={spear} alt="spear" className="spear hidden" />
          </div>
          <div className="spear-div" onClick={toggleSpear}>
            <li className="nav-item">Kijani</li>
            <img src={spear} alt="spear" className="spear hidden" />
          </div>

          <div className="spear-div" onClick={toggleSpear}>
            <li className="nav-item">Kijani</li>
            <img src={spear} alt="spear" className="spear hidden" />
          </div>
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
