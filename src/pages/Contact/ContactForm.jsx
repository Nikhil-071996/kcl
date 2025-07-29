// src/components/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focus");
  };

  const handleBlur = (e) => {
    if (!e.target.value) {
      e.target.parentNode.classList.remove("focus");
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Replace this with your API call
  };

  return (
    <div className="contact-form">
      <span className="circle one"></span>
      <span className="circle two"></span>

      <form onSubmit={handleSubmit} autoComplete="off">
        <h3 className="title">Contact us</h3>

        <div className="input-container">
          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Username</label>
          <span>Username</span>
        </div>

        <div className="input-container">
          <input
            type="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Email</label>
          <span>Email</span>
        </div>

        <div className="input-container">
          <input
            type="tel"
            name="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <label>Phone</label>
          <span>Phone</span>
        </div>

        <div className="input-container textarea">
          <textarea
            name="message"
            className="input"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
          <label>Message</label>
          <span>Message</span>
        </div>

        <input type="submit" value="Send" className="btn" />
      </form>
    </div>
  );
};

export default ContactForm;
