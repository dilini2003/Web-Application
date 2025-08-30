import React from "react";
import "./About.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about">
      <p className="section-title">ABOUT US</p>
      <div className="about-wrapper">
        <div className="about-box">
          <div className="about-text">
            <p className="section-subtitle">WHY PATIENTS CHOOSE US</p>
            <p className="about-paragraph">
              At MediMeet, we are committed to making healthcare more <br />
              accessible, efficient, and patient-centered. Our application
              <br />
              connects patients with qualified, trusted medical professionals
              <br />
              through a secure, user-friendly platform designed to simplify
              <br />
              appointment scheduling and healthcare access.
            </p>
            <p className="about-paragraph">
              MediMeet partners with highly experienced doctors and clinics,
              <br />
              offering digital access to a wide range of specialties and
              services. <br />
              Whether it's a routine consultation or follow-up care, MediMeet
              <br />
              ensures patients can easily book, manage, and attend <br />
              appointments — all in one place.
            </p>
            <p className="about-paragraph">
              Backed by a commitment to data privacy and patient safety, <br />
              MediMeet is your trusted digital gateway to smarter, faster, and
              <br />
              more reliable healthcare access.
            </p>
            <div className="about-stats">
              <div className="stat">
                <p className="stat-number">800+</p>
                <p className="stat-label">Consultants</p>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat">
                <p className="stat-number">3500+</p>
                <p className="stat-label">Consultations per day</p>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat">
                <p className="stat-number">4250+ </p>
                <p className="stat-label">Tests offered</p>
              </div>
              <div className="stat-divider">|</div>
              <div className="stat">
                <p className="stat-number">14500+ </p>
                <p className="stat-label">Tests per day</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src="/images/aboutphoto.png" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
