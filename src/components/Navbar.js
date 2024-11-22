import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // State untuk toggle antara Login/Register
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginPopup(false);
  };

  const handleRegisterSubmit = () => {
    // Simpan data register (bisa tambahkan validasi)
    console.log('Data Register:', registerData);
    setIsRegister(false); // Kembali ke tampilan login
    setRegisterData({ username: '', email: '', password: '', phone: '' }); // Reset form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevData) => ({ ...prevData, [name]: value }));
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

      {showLoginPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            {isRegister ? (
              <>
                <h2>Register</h2>
                <form>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={registerData.username}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Nomor Telepon"
                    value={registerData.phone}
                    onChange={handleChange}
                    required
                  />
                  <button type="button" onClick={handleRegisterSubmit}>
                    Submit
                  </button>
                </form>
                <p>
                  Sudah punya akun?{' '}
                  <span className="register-link" onClick={() => setIsRegister(false)}>
                    Login
                  </span>
                </p>
              </>
            ) : (
              <>
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
                  <span className="register-link" onClick={() => setIsRegister(true)}>
                    Register
                  </span>
                </p>
              </>
            )}
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
