import React from 'react'
import ContactInfo from './ContactInfo'
import ContactForm from './ContactForm'
import "./contact.css";

function ContactPage() {
  return (
    <div className="contact-page">
      {/* <span className="big-circle"></span> */}
      {/* <img src="img/shape.png" className="square" alt="" /> */}

      <h2 className='heading'>GET IN TOUCH</h2>
      <p className='heading-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit a, nihil velit eaque commodi at iure doloremque excepturi? Aspernatur voluptatum tempora illum non corporis unde quaerat magnam suscipit aperiam fuga.</p>

      <div className="form">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  )
}

export default ContactPage