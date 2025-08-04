import React, { useEffect, useRef, useState } from 'react'
import '../assets/styles/header.css'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap';
import logo from '../assets/images/footer/main_logo.png'


function Header() {
  return (
    <header >
      <section className="marquee-wrapper">
        <marquee>🏆 Kabaddi Champions League Haryana - Pre-Launch Event on 6th August 2025
          📰 Press Conference at Ramada, Sonipat ( 6th August 2025)
          📢 Registration for KCL Haryana Trials is Now Open!
        </marquee>
      </section>

      <div className="container">
        <Link to={'/'} className="logo">
          <div className="logo-wrapper">
            <img src={logo} alt="KCL" />
          </div>
        </Link>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/team'}>Teams</Link>
          <Link to={'/fixtures'} >Matches</Link>
          <Link to={'/standings'}>Standing</Link>
          <Link>About Us</Link>
          <div className="dropdown">
            <Link to="#">Media</Link>
            <div className="dropdown-content">
              <Link to="/media/photos">Photos</Link>
              <Link to="/media/videos">Videos</Link>
            </div>
          </div>

          <Link to={'/contact-us'}>Contact Us</Link>
          <Link className='contact-us' to={'/register'}>Register</Link>
        </nav>
      </div>
    </header>


  )
}

export default Header