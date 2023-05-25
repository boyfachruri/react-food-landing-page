import React from "react";
import AboutBackground from "../Assets/about-background.png";
import rotiAbout from "../Assets/asyraf-logo/rotiAbout.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Footer from "./Footer";

const About = () => {
  return (
    <div>
      <div className="about-section-container">
        <div className="about-background-image-container">
          <img src={AboutBackground} />
        </div>
        <div className="about-section-image-container">
          <img src={rotiAbout} />
        </div>
        <div className="about-section-text-container">
          {/* <p className="primary-subheading">About</p> */}
          <h1 className="primary-heading">
            Hidup Untuk Membuat Roti
          </h1>
          <p className="primary-text">
            Asyraf Bakery adalah toko roti yang dibuat oleh Ramdhani. Dia mengambil resiko untuk keluar dari tempat kerjanya, yang bergerak dibidang F&B.
          </p>
          <p className="primary-text">
            Berbekal dari pengalaman di tempat kerjanya, Ramdhani juga mengadakan kursus bagi UMKM.
          </p>
          <div className="about-buttons-container">
            <a href="https://www.youtube.com/@marisamarisa3197" target="_blank" className="secondary-button"><BsFillPlayCircleFill />&nbsp;
              Watch Video</a>
            {/* <button className="watch-video-button">
              
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
