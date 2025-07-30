import React, { useEffect, useRef, useState } from 'react'
import '../assets/styles/header.css'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap';
import logo from '../assets/images/footer/main_logo.png'


function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const marqueeContainerRef = useRef(null);
  const marqueeContentRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeContainerRef.current;
    const content = marqueeContentRef.current;

    if (!marquee || !content) return;

    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    const width = content.offsetWidth;

    gsap.fromTo(
      marquee.children,
      { x: 0 },
      {
        x: -width,
        duration: 20,
        ease: 'none',
        repeat: -1,
      }
    );
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <header >
        <section className="marquee-wrapper">
              <marquee>🏆 Kabaddi Champions League Haryana – Pre-Launch Event on 6th August 2025
 📰 Press Conference at Ramada, Sonipat ( 6th August 2025) 
📢 Registration for KCL Haryana Trials is Now Open!
</marquee>
        </section>

        <div className="container">

          <Link to={'/'} className="logo">
            <div className="logo-clip-path">
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

              <Link  to={'/contact-us'}>Contact Us</Link>
              <Link className='contact-us' to={'/register'}>Register</Link>
          </nav>
        </div>
    </header>


  )
}

export default Header