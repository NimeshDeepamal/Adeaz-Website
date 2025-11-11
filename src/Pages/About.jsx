import React from 'react';
import './CSS/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About Adeaz</h1>
        <p>Blending quality, style, and functionality proudly Sri Lankan.</p>
      </div>

      <div className="about-section">
        <h2>Who We Are</h2>
        <p>
          At <strong>Adeaz</strong>, we believe in creating products that combine innovation, quality, and style. 
          Founded in Sri Lanka, our mission is to provide solutions that make everyday life easier, more enjoyable, 
          and more beautiful. Every product reflects our dedication to craftsmanship and sustainability.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Vision</h2>
        <p>
          To become a trusted Sri Lankan brand known for innovation, quality, and exceptional customer experience. 
          We aim to set new standards in design and functionality while supporting local communities.
        </p>
      </div>

      <div className="about-section">
        <h2>Our Promise</h2>
        <ul>
          <li>Premium quality products</li>
          <li>Ethical and sustainable practices</li>
          <li>Customer-first approach</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Join Our Journey</h2>
        <p>
          At <strong>Adeaz</strong>, we are more than a brand we are a community that values quality, style, 
          and Sri Lankan pride. Join us as we innovate, grow, and create meaningful products for everyone.
        </p>
      </div>
    </div>
  );
};

export default About;
