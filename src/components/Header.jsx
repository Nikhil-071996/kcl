import React, { useEffect, useState } from 'react'
import '../assets/styles/header.css'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/images/header/KCL_Logo.svg'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();


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
        <div className="container">
          <nav>
              <Link to={'/'}>Home</Link>
              <Link>About</Link>
              <Link>Teams</Link>
          </nav>
          <div className="logo">
              <div className="half-border"></div>
              <img src={logo} alt="KCL" />
          </div>
          <nav>
              <Link to={'/register'}>Register</Link>
              <Link className='contact-us' to={'/contact-us'}>Contact Us</Link>

          </nav>
        </div>
    </header>


  )
}

export default Header