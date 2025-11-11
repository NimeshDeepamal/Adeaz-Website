import React, { useContext, useRef, useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.jpg'
import cart_item from '../Assets/cart_item.png'
import profile_icon from '../Assets/user-login.svg'
import { Link, useLocation } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/dropdown.svg'

export default function Navbar() {
  const [menu, setMenu] = useState("home")
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef()
  const location = useLocation()

  const [scrollPos, setScrollPos] = useState(0)
  const [hidden, setHidden] = useState(false)

  // Set active menu based on path
  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home"
    setMenu(path)

    // Close mobile menu when route changes
    if (menuRef.current && menuRef.current.classList.contains('nav-menu-visible')) {
      menuRef.current.classList.remove('nav-menu-visible')
    }
  }, [location.pathname])

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset

      if (currentScroll > scrollPos && currentScroll > 50) {
        setHidden(true) // scrolling down -> hide navbar
      } else {
        setHidden(false) // scrolling up -> show navbar
      }
      setScrollPos(currentScroll)

      // Close mobile menu if open
      if (menuRef.current && menuRef.current.classList.contains('nav-menu-visible')) {
        menuRef.current.classList.remove('nav-menu-visible')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrollPos])

  // Toggle mobile menu
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  // Click on menu link
  const handleLinkClick = (item) => {
    setMenu(item)
    if (menuRef.current.classList.contains('nav-menu-visible')) {
      menuRef.current.classList.remove('nav-menu-visible')
    }
  }

  return (
    <div className={`navbar ${hidden ? "navbar-hidden" : "navbar-visible"}`}>
      <Link to='/' className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>

      <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="dropdown" />

      <ul ref={menuRef} className="nav-menu">
        {["home", "womens", "mens", "store", "about", "contact"].map((item) => (
          <li key={item} onClick={() => handleLinkClick(item)}>
            <Link
              to={`/${item === "home" ? "" : item}`}
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
            {menu === item && <hr />}
          </li>
        ))}
      </ul>

      <div className="nav-login-cart">
        <Link to='/login'>
          <img src={profile_icon} alt="profile" />
        </Link>
        <Link to='/cart'>
          <img src={cart_item} alt="cart" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </div>
  )
}
