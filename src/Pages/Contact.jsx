import React from 'react'
import './CSS/Contact.css'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">We’d love to hear from you! Fill out the form or reach us through the following ways.</p>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h4>Phone</h4>
              <p>+94 71 123 4567</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h4>Email</h4>
              <p>info@adeaz.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h4>Location</h4>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
