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

      <form onSubmit={handleSubmit} autoComplete="off">

        <div className="input-container width-50">
          <label>Username</label>

          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-container width-50">
          <label>Email</label>

          <input
            type="email"
            name="email"
            className="input"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-container width-100">
          <label>Phone</label>

          <input
            type="tel"
            name="phone"
            className="input"
            value={formData.phone}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>

        <div className="input-container textarea width-100">
          <label>Message</label>

          <textarea
            name="message"
            className="input"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></textarea>
        </div>

        <input type="submit" value="Send Message" className="btn" />
      </form>
    </div>
  );
};

export default ContactForm;
