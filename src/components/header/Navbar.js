import React from 'react';
import logo from '../../assets/images/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo-div">
      <img src={logo} alt="logo" className="logo" />
    </div>
  </nav>
);

export default Navbar;
