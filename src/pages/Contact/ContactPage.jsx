import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import "./contact.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />

      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage