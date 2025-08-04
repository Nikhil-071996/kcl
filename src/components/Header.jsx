import React, { useEffect, useRef } from 'react'
import '../assets/styles/header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/footer/main_logo.png'


function Header() {
  const location = useLocation();
  const currentPathname = location.pathname;

 

  return (
    <header >
      <section className="marquee-wrapper">
        <marquee>
        🏆 Kabaddi Champions League Haryana - Pre-Launch Event on 6th August 2025
       &nbsp;&nbsp;&nbsp; |
         &nbsp;&nbsp;&nbsp; 📰 Press Conference at Ramada, Sonipat ( 6th August 2025) &nbsp;&nbsp;&nbsp; |
         &nbsp;&nbsp;&nbsp; 📢 Registration for KCL Haryana Trials is Now Open! 
        </marquee>
      </section>

      <div className="container">
        <Link to={'/'} className="logo">
          <div className="logo-wrapper">
            <img src={logo} alt="KCL" />
          </div>
        </Link>
        <nav>
          <Link to={'/'} className={currentPathname === '/' ? 'active' : ''}>Home</Link>
          <Link to={'/team'} className={currentPathname === '/team' ? 'active' : ''}>Teams</Link>
          <Link to={'/fixtures'} className={currentPathname === '/fixtures' ? 'active' : ''}>Matches</Link>
          <Link to={'/standings'} className={currentPathname === '/standings' ? 'active' : ''}>Standing</Link>
          <Link to={'/about-us'} className={currentPathname === '/about-us' ? 'active' : ''}>About Us</Link>
          <div className="dropdown">
            <Link to="#" className={currentPathname === '/media' ? 'active' : ''}>Media</Link>
            <div className="dropdown-content">
              <Link to="/media/photos">Photos</Link>
              <Link to="/media/videos">Videos</Link>
            </div>
          </div>

          <Link to={'/contact-us'} className={currentPathname === '/contact-us' ? 'active' : ''}>Contact Us</Link>
          <Link to={'/register'} className={`contact-us ${currentPathname === '/register' ? 'active' : ''}`}>Register</Link>
        </nav>
      </div>
    </header>


  )
}

export default Header