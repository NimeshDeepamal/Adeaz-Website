import React from 'react'
import './Hero.css'
import Hero_img1 from '../Assets/hero_img1.png'
import Hero_img2 from '../Assets/hero_img2.png'
import Navbar from '../Navbar/Navbar'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>Discover the style that moves <br/> with you, defines you, and<br/> empowers your every step.</h2>
        <button>Shop Now</button>
      </div>
      <div className="hero-right">
        <img src={Hero_img1} alt="image1" className='img1'/>
        <img src={Hero_img2} alt="image2" className='img2'/>
      </div>
    </div>
  )
}

export default Hero
