import React from 'react'

import logo from '../assets/images/footer/main_logo.png'
import footerBg from '../assets/images/footer/footer-bg.png'

import '../assets/styles/footer.css'
import { Link } from 'react-router-dom'
import Sponsers from './sponsers/Sponsers'

import facebookIcon from '../assets/images/social_media/fb.svg'
import instagramIcon from '../assets/images/social_media/insta.svg'
import youtubeIcon from '../assets/images/social_media/youtube.svg'
import linkedInIcon from '../assets/images/social_media/linkedin.svg'
import xIcon from '../assets/images/social_media/x.svg'

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
                        <Link to="/brand-ambassador">BRAND AMBASSADOR</Link>
                        <Link to="/sponsors">OUR SPONSORS</Link>
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
                                    <img src={instagramIcon} alt="Instagram" />
                                </Link>
                                <Link>
                                    <img src={facebookIcon} alt="Facebook" />
                                </Link>
                                <Link>
                                    <img src={youtubeIcon} alt="YouTube" />
                                </Link>
                                <Link>
                                    <img src={linkedInIcon} alt="LinkedIn" />
                                </Link>
                                <Link>
                                    <img src={xIcon} alt="X" />
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