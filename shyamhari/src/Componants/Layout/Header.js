import React from 'react';
import '../Layout/Header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">ShyamHariBus</div>
      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/bookings">Bookings</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
