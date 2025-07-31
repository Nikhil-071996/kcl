// src/components/ContactInfo.jsx
import React from "react";
import logo from '../../assets/images/header/KCL_Logo.svg'

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </p>

      <div className="info">
        <div className="information">
          <i className="fas fa-map-marker-alt"></i>&nbsp;&nbsp;
          <p>92 Cherry Drive Uniondale, NY 11553</p>
        </div>
        <div className="information">
          <i className="fas fa-envelope"></i>&nbsp;&nbsp;
          <p>lorem@ipsum.com</p>
        </div>
        <div className="information">
          <i className="fas fa-phone"></i>&nbsp;&nbsp;
          <p>123-456-789</p>
        </div>

        <div className="contact-logos">
          <img src={logo} alt="logo" className="contact-logo" />
        </div>
        
      </div>

    </div>
  );
};

export default ContactInfo;
