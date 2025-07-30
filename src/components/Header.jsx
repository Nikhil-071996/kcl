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
              <marquee>Kabaddi ke itihaas me sabse badi – Champions ki takkar! REVEALING SOON   | Fir arhe hai champions,  AB PURE DESH ME GUNJEGI - KABADDI KABADDI KABADDI | Champions Ki Takkar... Officially Begins! PRE-LAUNCH ON 6TH AUG 2025</marquee>
        </section>

        <div className="container">

          <Link to={'/'} className="logo">
            <div className="logo-clip-path">
              <img src={logo} alt="KCL" />
            </div>
          </Link>
          <nav>
              <Link to={'/'}>Home</Link>
              <Link>Teams</Link>
              <Link to={'/fixtures'}>Matches</Link>
              <Link>Standing</Link>
              <Link>About Us</Link>
              <Link  to={'/contact-us'}>Contact Us</Link>
              <Link className='contact-us' to={'/register'}>Register</Link>
          </nav>
        </div>
    </header>


  )
}

export default Header