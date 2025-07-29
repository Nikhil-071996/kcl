// src/components/ContactInfo.jsx
import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum
        adipisci recusandae praesentium dicta!
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
      </div>

      <div className="social-media">
        <p>Connect with us :</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
