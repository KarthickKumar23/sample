import React from 'react';
import './NavigationBar.css'; // Assuming you have a CSS file for styling

const NavigationBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#group">Group</a></li>
        <li><a href="#infrastructure">Infrastructure</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#green-energy">Green Energy</a></li>
        <li><a href="#quality">Quality</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#contact-us">Contact Us</a></li>
      </ul>
    </div>
  );
}

export default NavigationBar;
