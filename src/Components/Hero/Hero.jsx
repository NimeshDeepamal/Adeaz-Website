import React from 'react'
import './Hero.css'
import Hero_img1 from '../Assets/heroimgpng.png'
// import Hero_img2 from '../Assets/hero_img2.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>
          Discover the style that moves <br />with you, defines you, and<br /> empowers your every step.
        </h2>
        <button>Shop Now</button>
      </div>
      <div className="hero-right">
        <img src={Hero_img1} alt="img1" className='img1'/>
      </div>
    </div>
  )
}

export default Hero
