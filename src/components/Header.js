// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">YOM</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
