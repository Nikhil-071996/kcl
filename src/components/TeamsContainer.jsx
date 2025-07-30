import React from 'react'
import Team1 from '../assets/images/Home/team_1.jpg'
import Team2 from '../assets/images/Home/team_2.jpg'

import "../assets/styles/teams-container.css"
import arrow from '../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom'

function TeamsContainer() {
  return (
    <div className='team-container'>
        <div className="container">

            <div className="heading-container">
                <h2>TEAMS</h2>
                <Link href="">
                    <span>View More</span>
                    <img src={arrow} alt="Arrow" />
                </Link>
            </div>

            <div className="teams">

                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>
                
                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>

                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default TeamsContainer