import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-top">
        <p>Subscribe to our Newsletter For New & latest Blogs and Resources <span className="arrow">&#10140;</span></p>
      </div>
      <div className="navbar-main">
        <div className="logo">
          <img src={logo} alt="FutureTech Logo" />
          <span>FutureTech</span>
        </div>
        <nav className="navbar-links">
          <ul>
            <li className='active'><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#podcasts">Podcasts</a></li>
            <li><a href="#resources">Resources</a></li>
          </ul>
        </nav>
        <button className="contact-button">Contact Us</button>
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
