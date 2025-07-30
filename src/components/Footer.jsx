import React from 'react'
import team1 from '../assets/images/footer/team_1.jpg'
import team2 from '../assets/images/footer/team_2.jpg'

import instagram from '../assets/images/footer/instagram.svg'
import facebook from '../assets/images/footer/facebook.png'
import youtube from '../assets/images/footer/youtube.svg'
import linkedIn from '../assets/images/footer/linked_in.svg'

import logo from '../assets/images/footer/main_logo.png'

import '../assets/styles/footer.css'
import { Link } from 'react-router-dom'
import Sponsers from './sponsers/Sponsers'

function Footer() {
  return (
    <>
        <Sponsers />
    <footer>



        <div className="container">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="teams">
                <div className="image-container">
                    <img src={team1} alt="team-1" />
                    <img src={team2} alt="team-1" />
                    <img src={team1} alt="team-1" />
                    <img src={team2} alt="team-1" />
                    <img src={team1} alt="team-1" />
                    <img src={team2} alt="team-1" />
                    <img src={team1} alt="team-1" />
                    <img src={team2} alt="team-1" />
                </div>
            </div>

            <div className="menu">
                <Link to={'/'}>Home</Link>
                <Link to={'/team'}>Teams</Link>
                <Link to={'/fixtures'} >Matches</Link>
                <Link to={'/standings'}>Standing</Link>
                <Link>About Us</Link>
                <Link  to={'/contact-us'}>Contact Us</Link>
                <Link className='contact-us' to={'/register'}>Register</Link>
            </div>
            
            <div className="social-media">
                <Link>
                    <img src={instagram} alt="" />
                </Link>

                <Link>
                    <img src={facebook} alt="" />
                </Link>

                <Link>
                    <img src={youtube} alt="" />
                </Link>

                <Link>
                    <img src={linkedIn} alt="" />
                </Link>
            </div>
            <div className="privacy-content-container">
                <div className="copyright">© 2025 KabaddiChampions League.. Developed by Creative Cosmos. All rights reserved.</div>
                <div className="links">
                    <Link>Privacy Policy</Link> 
                    <span>|</span>
                    <Link>Tearms & conditions</Link>
                </div>
            </div>
        </div>

    </footer>
    
    </>
  )
}

export default Footer