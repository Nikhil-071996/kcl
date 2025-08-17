// src/components/ContactInfo.jsx
import React from "react";
import logo from '../../assets/images/footer/main_logo.png'
import bannerForm from '../../assets/images/register/Ragiter_background.png';
import locationPin from '../../assets/images/contact/location_icon.svg'
import callIcon from '../../assets/images/contact/call_icon.svg'
import mailIcon from '../../assets/images/contact/mail-icon.svg'
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div className="contact-info" style={{backgroundImage: `url(${bannerForm})`}}>
      <h3 className="title">Let's get in touch</h3>
      <p className="text">
      </p>

      <div className="info">
        <div className="information">
          {/* <img src={locationPin} alt="location" />
          <p>92 Cherry Drive Uniondale, NY 11553</p> */}
        </div>
        <div className="information">
          <img src={mailIcon} alt="mail" className="mail-icon" />
          <a href="mailto:team@kabaddichampionsleague.com">
  team@kabaddichampionsleague.com
</a>
        </div>
        <div className="information">
          {/* <img src={callIcon} alt="call" />
          <p>123-456-789</p> */}
        </div>

        <div className="contact-logos">
          <img src={logo} alt="logo" className="contact-logo" />
        </div>
        
      </div>

    </div>
  );
};

export default ContactInfo;
