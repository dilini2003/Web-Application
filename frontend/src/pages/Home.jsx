import React from "react";
import "./Home.css";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="header-container">
        {/*---left side---*/}
        <div className="header-left">
          <p className="header-title">
            Book Appointment <br /> With Trusted Dilini
          </p>
          <div className="header-info">
            <img
              src="/images/group_profiles.png"
              alt="Group"
              className="group-image"
            />
            <p className="header-description">
              Simply browse through our extensive list of trusted doctors,{" "}
              <br /> schedule your appointment hassle-free.
            </p>
          </div>
          <a href="/doctors" className="header-cta">
            Book appointment{" "}
            <img src="/images/arrow_icon.svg" alt="" className="arrow-icon" />
          </a>
        </div>
        <div className="header-right">
          <img src="/images/header.jpg" className="header-image" alt="" />
        </div>
      </div>
      <div className="quality-data-section">
        <p className="quality-title">Quality Data</p>
        <div className="data-cards">
          <div className="data-card">
            <p className="data-value">94.82%</p>
            <p className="divider">|</p>
            <p className="data-label">
              Patient Satisfaction Rate<br />
              on Services
            </p>
          </div>
          <div className="data-card">
            <p className="data-value">97.30%</p>
            <p className="divider">|</p>
            <p className="data-label">
              Compliance to Correct <br />
              Patient Identification
            </p>
          </div>
          <div className="data-card">
            <p className="data-value">0.00%</p>
            <p className="divider">|</p>
            <p className="data-label">Rate of Patient Falls</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
