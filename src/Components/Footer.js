import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import asyrafBakery from "../Assets/asyraf-logo/asyrafBakery.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-columns"><div className="footer-section-one">
        <span>Copyright &copy; 2023 | Powered by Boy Fachruri</span>
      </div></div>
      
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Sosial Media Kami</span>
          <span>
            <BsTwitter /> &nbsp;&nbsp;
            <SiLinkedin /> &nbsp;&nbsp;&nbsp;
            <BsYoutube /> &nbsp;
            <FaFacebookF />
          </span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
