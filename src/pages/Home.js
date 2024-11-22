import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero-section">
        <img
          src="https://via.placeholder.com/1500x400"
          alt="Food Banner"
          className="hero-banner"
        />
        <h1 className="hero-text">Klik, Pilih, Nikmati</h1>
      </div>
      <div className="categories">
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Promo" />
          <p>Special Promo</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Paket" />
          <p>Paket</p>
        </div>
        <div className="category-card">
          <img src="https://via.placeholder.com/100" alt="Menu" />
          <p>Menu</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
