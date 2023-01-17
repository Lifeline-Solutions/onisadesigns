import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
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
