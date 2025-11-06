// Navbar.js
import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_item from '../Assets/cart_item.png'
import profile_icon from '../Assets/user-login.svg'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown.svg'

export default function Navbar() {
    const [menu, setMenu] = useState("home")
    const { getTotalCartItems } = useContext(ShopContext)
    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <Link to='/' className="nav-logo"><img src={logo} alt="logo" /></Link>

            <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="dropdown" />

            <ul ref={menuRef} className="nav-menu">
                {["home", "womens", "mens", "store", "about", "contact"].map((item) => (
                    <li key={item} onClick={() => setMenu(item)}>
                        <Link to={`/${item === "home" ? "" : item}`} style={{ textDecoration: 'none', color: 'white' }}>
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                        {menu === item && <hr />}
                    </li>
                ))}
            </ul>

            <div className="nav-login-cart">
                <Link to='/login'><img src={profile_icon} alt="profile" /></Link>
                <Link to='/cart'><img src={cart_item} alt="cart" /><div className="nav-cart-count">{getTotalCartItems()}</div></Link>
                
            </div>
        </div>
    )
}
