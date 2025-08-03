import React from 'react'
import Team1 from '../assets/images/Home/team_1.jpg'
import Team2 from '../assets/images/Home/team_2.jpg'
import arrow from '../assets/images/Home/Arrow.svg'
import banner from '../assets/images/team-page/TeamsPage.png'
import { Link } from 'react-router-dom'

function Teams() {

    
    
  return (
    <div className='teamPage'>
            <div className="page-team-header" style={{backgroundImage: `url(${banner})`}}>
                <div className="container">
                    <div className="content">
                        <h2>Teams</h2>
                    </div>
                </div>
            </div>
    
    <div className='team-container'>
        <div className="container">
            <div className="teams" style={{marginBottom: '50px'}}>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team1} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team2} alt="Team1" />
                    </Link>
                    
                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team1} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team2} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team1} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team2} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team1} alt="Team1" />
                    </Link>

                    <Link to={'/team-page'} className="team-card width-20">
                        <img src={Team2} alt="Team1" />
                    </Link>

                </div>
        </div>
    </div>
            
    
    
        </div>
  )
}

export default Teams