import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Layout/Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="app-header">
      <div className="logo">
        <Link to="/">ShyamHariBus</Link>
      </div>

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/book" onClick={closeMenu}>Book Tickets</Link>
        <Link to="/bookings" onClick={closeMenu}>Your Bookings</Link>
        <Link to="/track" onClick={closeMenu}>Track Bus</Link>
        <Link to="/faq" onClick={closeMenu}>FAQ</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/about" onClick={closeMenu}>About Us</Link>
        <div className="auth-links">
          <Link to="/LoginScreen" onClick={closeMenu}>Login</Link> /
          <Link to="/register" onClick={closeMenu}>Register</Link>
        </div>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
