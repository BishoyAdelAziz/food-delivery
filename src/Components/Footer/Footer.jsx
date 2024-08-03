import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="footer-Content">
        <div className="Footer-Content-Left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil
            nemo dicta incidunt, iste a.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="Linkedin" />
          </div>
        </div>
        <div className="Footer-Content-Center">
          <h2>Company </h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="Footer-Content-Right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+20-1284-870-719</li>
            <li>+20-1050-904-438</li>
            <li>bishoy.adel5555@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="Footer-Copy-Right">
        Copyright 2023-2024 ® Tomato.com All Rights Reserved .
      </p>
    </div>
  );
};

export default Footer;
