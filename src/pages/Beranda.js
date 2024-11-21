// src/components/Beranda.js
import React from 'react';
import './Beranda.css';

const Beranda = () => {
  const handlePromoClick = () => {
    alert("Navigasi ke halaman Promo");
  };

  const handlePaketClick = () => {
    alert("Navigasi ke halaman Paket");
  };

  const handleMenuClick = () => {
    alert("Navigasi ke halaman Menu");
  };

  return (
    <div className="beranda">
      <header className="navbar">
        <div className="logo">
          <img src="logo.png" alt="EZPick Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#rekomendasi">Rekomendasi</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Log in/Sign up</button>
        </div>
      </header>

      <div className="banner">
        <h1>Klik, Pilih, Nikmati</h1>
      </div>

      <div className="categories">
        <div className="category-card" onClick={handlePromoClick}>
          <img src="promo.png" alt="Promo" />
          <p>Special Promo</p>
        </div>
        <div className="category-card" onClick={handlePaketClick}>
          <img src="paket.png" alt="Paket" />
          <p>Paket</p>
        </div>
        <div className="category-card" onClick={handleMenuClick}>
          <img src="menu.png" alt="Menu" />
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
};

export default Beranda;
