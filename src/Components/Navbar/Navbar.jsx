import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_item from '../Assets/cart_item.png'
import profile_icon from '../Assets/profile.jpg'
import { Link } from 'react-router-dom'

export default function Navbar() {

    const[menu,setmenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
      <Link to='/' style={{textDecoration: 'none'}}><img src={logo} alt="logo" /></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setmenu("home")}}><Link to='/' style={{textDecoration: 'none',color: 'white'}}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("womens")}}><Link to='/womens' style={{textDecoration: 'none',color: 'white'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("mens")}}><Link to='/mens' style={{textDecoration: 'none',color: 'white'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("store")}}><Link to='/store' style={{textDecoration: 'none',color: 'white'}}>Store</Link>{menu==="store"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("about")}}><Link to='/about' style={{textDecoration: 'none',color: 'white'}}>About</Link>{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("contact")}}><Link to='/contact' style={{textDecoration: 'none',color: 'white'}}>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><img src={profile_icon} alt="profile" /></Link>
      <Link to='/cart'><img src={cart_item} alt="cart" /></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
