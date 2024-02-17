import React, { useState } from 'react';
import logo from './images/logo.png'; // Import your logo image
import './LandingPage.css'; // Import the CSS file for Navbar styles

const Navbar = () => {
  const [activePage, setActivePage] = useState('home');

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Furniture Co. Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <button
            className={activePage === 'home' ? 'active' : ''}
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={activePage === 'products' ? 'active' : ''}
            onClick={() => handleNavClick('products')}
          >
            Products
          </button>
        </li>
        <li>
          <button
            className={activePage === 'about' ? 'active' : ''}
            onClick={() => handleNavClick('about')}
          >
            About
          </button>
        </li>
        <li>
          <button
            className={activePage === 'contact' ? 'active' : ''}
            onClick={() => handleNavClick('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;