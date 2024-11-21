// src/components/Beranda.js
import React, { useState } from 'react';
import './Beranda.css';

const Beranda = () => {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setShowLoginPopup(true);
  const handleRegisterClick = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(true);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowProfileMenu(false);
  };

  const handleProfileClick = () => setShowProfileMenu(!showProfileMenu);

  const closePopup = () => {
    setShowLoginPopup(false);
    setShowRegisterPopup(false);
    setShowProfileMenu(false);
  };

  return (
    <div className="beranda">
      {/* Overlay Blur */}
      {(showLoginPopup || showRegisterPopup || showProfileMenu) && <div className="overlay"></div>}

      <header className="navbar">
        <div className="logo">
          <img src="logo.png" alt="EZPick Logo" className="logo-image" />
        </div>
        <nav className="nav-links">
          <a href="#beranda">Beranda</a>
          <a href="#rekomendasi">Rekomendasi</a>
        </nav>
        <div className="auth-buttons">
          {!isLoggedIn ? (
            <button className="login-button" onClick={handleLoginClick}>Log in/Sign up</button>
          ) : (
            <div className="profile-button" onClick={handleProfileClick}>
              <img src="profile.png" alt="Profile" className="profile-image" />
            </div>
          )}
        </div>
      </header>

      <div className="banner">
        <h1>Klik, Pilih, Nikmati</h1>
      </div>

      <div className="categories">
        <div className="category-card" onClick={() => alert("Navigasi ke halaman Promo")}>Promo</div>
        <div className="category-card" onClick={() => alert("Navigasi ke halaman Paket")}>Paket</div>
        <div className="category-card" onClick={() => alert("Navigasi ke halaman Menu")}>Menu</div>
      </div>

      {/* Popup Login */}
      {showLoginPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Login</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="password" placeholder="Password" required />
              <button type="button" onClick={handleLogin} className="popup-button">Masuk</button>
            </form>
            <p>
              Belum ada akun? <span onClick={handleRegisterClick} className="link">Daftar dulu</span>
            </p>
            <button className="close-button" onClick={closePopup}>X</button>
          </div>
        </div>
      )}

      {/* Popup Registrasi */}
      {showRegisterPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Registrasi</h2>
            <form>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <input type="tel" placeholder="No. Tlp" required />
              <button type="submit" className="popup-button">Submit</button>
            </form>
            <button className="close-button" onClick={closePopup}>X</button>
          </div>
        </div>
      )}

      {/* Profile Menu Popup */}
      {showProfileMenu && isLoggedIn && (
        <div className="profile-menu">
          <div className="profile-menu-item">
            <img src="profile.png" alt="Profile" className="profile-menu-image" />
            <p>Gambar Profil</p>
          </div>
          <button className="profile-menu-item" onClick={() => alert("Navigasi ke halaman Notifikasi")}>Notifikasi</button>
          <button className="profile-menu-item" onClick={() => alert("Navigasi ke halaman Riwayat")}>Riwayat</button>
          <button className="profile-menu-item" onClick={() => alert("Navigasi ke halaman Edit Profil")}>Edit Profil</button>
          <button className="profile-menu-item" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Beranda;
