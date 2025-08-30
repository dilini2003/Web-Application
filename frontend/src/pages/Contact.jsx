import React from "react";
import "./Contact.css";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">CONTACT US</div>
      <div className="contact-wrapper">
        <div className="contact-image">
          <img src="/images/contactphoto.jpeg" alt="Contact" />
        </div>
        <div className="contact-info">
          <p className="info-title">MediMeet Health Center</p>
          <p className="info-address">
            245 Lakeview Avenue <br />
            Colombo 07, Western Province <br />
            Sri Lanka 00700
          </p>
          <p className="info-phone">Tel: 0112 233 4455</p>
          <p className="info-email">Email: medimeet@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
