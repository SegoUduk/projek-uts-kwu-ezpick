import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  // Simulasi login/logout
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">EZPICK</div>
        <ul className="navbar-links">
          <li><a href="#home">Beranda</a></li>
          <li><a href="#rekomendasi">Rekomendasi</a></li>
        </ul>
        {isLoggedIn ? (
          <button className="profile-btn">Profil</button>
        ) : (
          <button className="login-btn" onClick={() => setShowLoginPopup(true)}>
            Log in
          </button>
        )}
      </nav>

      {/* Pop-up login */}
      {showLoginPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </form>
            <p>
              Belum punya akun?{' '}
              <span className="register-link">Register</span>
            </p>
            <button
              className="close-btn"
              onClick={() => setShowLoginPopup(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
