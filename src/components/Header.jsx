import React, { useEffect, useRef, useState } from 'react'
import '../assets/styles/header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/footer/main_logo.png'


function Header() {
  const location = useLocation();
  const currentPathname = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [currentPathname]);

  return (
    <header >
      <section className="marquee-wrapper">
        <marquee>
          🏆 Kabaddi Champions League Haryana - Pre-Launch Event on 18th August 2025
          &nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp; 📰 Press Conference at Ramada, Sonipat ( 18th August 2025) &nbsp;&nbsp;&nbsp; |
          &nbsp;&nbsp;&nbsp; 📢 Registration for KCL Haryana Trials is Now Open!
        </marquee>
      </section>

      <div className="container">
        <Link to={'/'} className="logo">
          <div className="logo-wrapper">
            <img src={logo} alt="KCL" />
          </div>
        </Link>

        <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={isMenuOpen ? 'active' : ''}>
          <Link to={'/'} className={currentPathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to={'/team'} className={currentPathname === '/team' ? 'active' : ''} onClick={closeMenu}>Teams</Link>
          <Link to={'/fixtures'} className={currentPathname === '/fixtures' ? 'active' : ''} onClick={closeMenu}>Matches</Link>
          <Link to={'/standings'} className={currentPathname === '/standings' ? 'active' : ''} onClick={closeMenu}>Standing</Link>
          <Link to={'/about-us'} className={currentPathname === '/about-us' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <div className="dropdown">
            <Link to="#" className={currentPathname === '/media' ? 'active' : ''}>Media</Link>
            <div className="dropdown-content">
              <Link to="/media/photos" onClick={closeMenu}>Photos</Link>
              <Link to="/media/videos" onClick={closeMenu}>Videos</Link>
            </div>
          </div>

          <Link to={'/contact-us'} className={currentPathname === '/contact-us' ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
          <Link to={'/register'} className={`contact-us ${currentPathname === '/register' ? 'active' : ''}`} onClick={closeMenu}>Register</Link>
        </nav>
      </div>
    </header>


  )
}

export default Header