import React from 'react'
import './Footer.css'
import Footer_logo from '../Assets/logo.jpg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={Footer_logo} alt="" />
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
            <img src="https://img.icons8.com/?size=100&id=2olGSGqpqGWD&format=png&color=FFFFFF" alt="" /> 
        </div>
        <div className="footer-icons-container">
            <img src=" https://img.icons8.com/?size=100&id=32292&format=png&color=FFFFFF" alt="" />
        </div>
        <div className="footer-icons-container">
            <img src="https://img.icons8.com/?size=100&id=118468&format=png&color=FFFFFF" alt="" />  
        </div> 
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved.  </p>
        </div>
    </div>
  )
}

export default Footer
