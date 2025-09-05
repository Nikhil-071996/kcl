import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import banner from '../../assets/images/team-page/TeamsPage.png'

import "./contact.css";

function ContactPage() {
  return (
    <>
      <div className="page-team-header contact-page-header" style={{ backgroundImage: `url(${banner})`, marginTop: '101px' }}>
        <div className="container">
          <div className="content">
            <h2>GET IN TOUCH</h2>
          </div>
        </div>
      </div>
      <div className="contact-page">
        {/* <img src="img/shape.png" className="square" alt="" /> */}


        <div className="form">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default ContactPage