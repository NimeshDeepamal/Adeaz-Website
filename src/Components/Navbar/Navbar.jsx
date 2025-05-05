import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_item from '../Assets/cart_item.png'
import profile_icon from '../Assets/profile.jpg'

export default function Navbar() {

    const[menu,setmenu] = useState("home")

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav-menu">
        <li onClick={()=> {setmenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("womens")}}>Women{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("mens")}}>Men{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("stores")}}>Store{menu==="store"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=> {setmenu("contact")}}>Contact{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <img src={profile_icon} alt="profile" />
        <img src={cart_item} alt="cart" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
