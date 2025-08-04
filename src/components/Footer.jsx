import React from 'react'

import instagram from '../assets/images/footer/instagram.svg'
import facebook from '../assets/images/footer/facebook.png'
import youtube from '../assets/images/footer/youtube.svg'
import linkedIn from '../assets/images/footer/linked_in.svg'

import logo from '../assets/images/footer/main_logo.png'
import footerBg from '../assets/images/footer/footer-bg.png'

import '../assets/styles/footer.css'
import { Link } from 'react-router-dom'
import Sponsers from './sponsers/Sponsers'

function Footer() {
    return (
        <>
            <Sponsers />
            <footer style={{ backgroundImage: `url(${footerBg})` }}>
                <div className="container">
                    {/* Central Logo */}
                    <div className="logo">
                        <img src={logo} alt="Kabaddi Champions League Logo" />
                    </div>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        <Link to="/blogs">BLOGS</Link>
                        <Link to="/brand-ambassador">BRAND AMBASDER</Link>
                        <Link to="/sponsors">OUR SPONSERS</Link>
                        <Link to="/contact-us">CONTACT US</Link>
                        <Link to="/media">MEDIA</Link>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="footer-bottom">
                        {/* Copyright */}
                        <div className="copyright">
                            © 2025 Kabaddi Champions League.. Developed by Creative Cosmos. All rights reserved.
                        </div>

                        {/* Social Media and Legal Links */}
                        <div className="footer-right">
                            {/* Social Media Icons */}
                            <div className="social-media">
                                <Link>
                                    <img src={instagram} alt="Instagram" />
                                </Link>
                                <Link>
                                    <img src={facebook} alt="Facebook" />
                                </Link>
                                <Link>
                                    <img src={youtube} alt="YouTube" />
                                </Link>
                                <Link>
                                    <img src={linkedIn} alt="LinkedIn" />
                                </Link>
                            </div>

                            {/* Legal Links */}
                            <div className="legal-links">
                                <Link>Privacy Policy</Link>
                                <span>|</span>
                                <Link>Tearms & conditions</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer