import React from 'react';
import './CSS/LoginSignup.css';
import logo from '../Components/Assets/login-signuplogo.png';

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <div className="loginsignup-header">
          <h1>Sign Up</h1>
          <img src={logo} alt="Logo" />
        </div>

        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>

        <button>Continue</button>

        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">By continuing, I agree to the terms of use & privacy policy.</label>
        </div>

        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
