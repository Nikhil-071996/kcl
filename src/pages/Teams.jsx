import React from 'react'
import Team1 from '../assets/images/Home/logos/karnal_kings.png'
import Team2 from '../assets/images/Home/logos/gurgaon_gurus.png'
import Team3 from '../assets/images/Home/logos/rohatak_royals.png'
import Team4 from '../assets/images/Home/logos/faridabad_fighters.png'
import Team5 from '../assets/images/Home/logos/panipat_panthers.png'
import Team6 from '../assets/images/Home/logos/sonipat_star.png'
import Team7 from '../assets/images/Home/logos/bhiwani_bulls.png'
import Team8 from '../assets/images/Home/logos/hisar_heros.png'
import arrow from '../assets/images/Home/Arrow.svg'
import banner from '../assets/images/team-page/TeamsPage.png'
import '../assets/styles/teams-cards-page.css'
import { Link } from 'react-router-dom'

function Teams() {



    return (
        <div className='teamsPage'>
            <div className="page-team-header" style={{ backgroundImage: `url(${banner})` }}>
                <div className="container">
                    <div className="content">
                        <h2>Teams</h2>
                    </div>
                </div>
            </div>

            <div className='team-container'>
                <div className="container">
                    <div className="teams" style={{ marginBottom: '50px' }}>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team1} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team2} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team3} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team4} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team5} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team6} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team7} alt="Team1" />
                        </Link>

                        <Link to={'/team-page'} className="team-card width-20">
                            <img src={Team8} alt="Team1" />
                        </Link>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Teams