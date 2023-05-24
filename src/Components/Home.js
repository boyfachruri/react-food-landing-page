import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">Roti Rumahan, Kualitas Restoran</h1>
            <p className="primary-text">
              Roti Ini Dibuat Dengan Tangan Sendiri, Dengan Bahan Yang Sangat
              Berkualitas Dan Menyehatkan
            </p>
            <button className="secondary-button">
              Pesan Sekarang <FiArrowRight />
            </button>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
