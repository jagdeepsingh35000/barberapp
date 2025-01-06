import React, { useState } from 'react'
import "../CssFiles/Navbar.css"


export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev); // Properly toggles the state
      };
  return (
    <div className='nav-container'>
      <div className='nav-list'>
        <span className='book-appoin'>Book an Appointment!</span>
        <div className={`list-container ${menuOpen ? "active" : ""}`}>
            <ul id='list'>
                <li>Welcome</li>
                <li>Our Story</li>
                <li>Services</li>
                <li>Price</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='ham-menu'></div>
        <button  className='hamburgerbtn' onClick={toggleMenu}><img src='hamburger.png' alt='menu'></img></button>
        {menuOpen && (
            <button className="close-button" onClick={toggleMenu}>
              ✖
            </button>
          )}

      </div>
      <div className='nav-text'>
        <p className='professinalbarbershop'>PROFESIONAL BARBARSHOP</p>
        <h2 className='professinalbarbershop'>BECKETTE</h2>
        <p>Since 1978</p>

      </div>
     
    </div>
    
  )
}
