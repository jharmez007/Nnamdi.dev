import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { createContact } from "../../services/contactServices";


import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    setErrorMessage("");

    // Validate fields
    if (!name || !email || !message) {
      setErrorMessage("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setLoading(true);

    const contact = {
      name: name,
      email: email,
      message: message,
    };

    try {
      const response = await createContact(contact);

      if (response?.status === 201) {
        setIsFormSubmitted(true);
      } else {
        setErrorMessage(response?.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="head-text">Take a coffe & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:jamesagu2001@gmail.com" className="p-text">Jamesagu2001@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="https://wa.me/message/H64N6ZOI6ZEMB1" target="_blank" rel="noreferrer" className="p-text">+234 705-623-6427</a>
        </div>
      </div>

      {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="name" value={name} onChange={handleChangeInput} required />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput} 
          />
        </div>
        {errorMessage && (
          <p className="error">{errorMessage}</p>
        )}
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
      </div>
      : <div>
        <h3 className="blue-text">Thank you for getting in touch!</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)
