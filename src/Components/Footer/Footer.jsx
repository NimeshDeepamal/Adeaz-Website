import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo-removebg.png'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-top">
        <div className="footer-logo">
          <img src={Footer_logo} alt="Logo" />
        </div>

        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="footer-newsletter">
          <p>Subscribe to our newsletter</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className="footer-social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p> {`© ${new Date().getFullYear()}  ADEaZ . All rights reserved.`}</p>
      </div>
    </footer>
  )
}

export default Footer
