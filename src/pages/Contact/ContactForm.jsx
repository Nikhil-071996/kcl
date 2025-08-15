// src/components/ContactForm.jsx
import React, { useState } from "react";
import { submitContactForm } from "../../api/register";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

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

    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors(prev => ({
        ...prev,
        [e.target.name]: ""
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    // Basic required fields
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";

    // Phone number validation
    if (formData.phone.trim()) {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Phone number must be 10 digits";
      }
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const newErrors = validate();
    console.log(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const submitPromise = submitContactForm(formData);

      toast.promise(submitPromise, {
        pending: 'Sending message...',
        success: {
          render({ data }) {
            if (data?.status === 200) {
              // Reset form on success
              setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
              });
              return 'Message sent successfully!';
            } else {
              return 'Failed to send message';
            }
          }
        },
        error: {
          render({ data }) {
            console.error('Error sending message:', data);
            return 'Failed to send message. Please try again.';
          }
        }
      });
    } catch (error) {
      console.error('Error in form submission:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-form">

      <form onSubmit={handleSubmit} autoComplete="off">

        <div className="input-container width-50">
          <label>Name</label>

          <input
            type="text"
            name="name"
            className="input"
            value={formData.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          {errors.name && <span className="error">{errors.name}</span>}
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
          {errors.email && <span className="error">{errors.email}</span>}
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
          {errors.phone && <span className="error">{errors.phone}</span>}
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
