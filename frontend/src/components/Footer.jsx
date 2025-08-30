import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img className="logo" src="/images/logo.png" alt="Logo" />
          <h1 className="title">MediMeet</h1>
        </div>

        <div className="footer-column">
          <h3>Product</h3>
          <p>Features</p>
          <p>Pricing</p>
          <p>Case studies</p>
          <p>Reviews</p>
          <p>Updates</p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <p>About</p>
          <p>Contact us</p>
          <p>Blog</p>
        </div>

        <div className="footer-column">
          <h3>Get In Touch</h3>
          <p>0112 233 4455</p>
          <p>medimeet@gmail.com</p>
        </div>

        <div className="footer-column">
          <h3>Follow us</h3>
          <div className="social-row">
            <img src="/images/facebook_icon.png" alt="Facebook" />
            <p>Facebook</p>
          </div>
          <div className="social-row">
            <img src="/images/twitter_icon.png" alt="Twitter" />
            <p>Twitter</p>
          </div>
          <div className="social-row">
            <img src="/images/instagram_icon.png" alt="Instagram" />
            <p>Instagram</p>
          </div>
          <div className="social-row">
            <img src="/images/linkedin_icon.png" alt="LinkedIn" />
            <p>LinkedIn</p>
          </div>
          <div className="social-row">
            <img src="/images/youtube_icon.png" alt="YouTube" />
            <p>YouTube</p>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-bottom">
        Copyright © 2025 MediMeet - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
