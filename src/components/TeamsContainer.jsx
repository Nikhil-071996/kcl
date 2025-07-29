import React from 'react'
import Team1 from '../assets/images/Home/team_1.jpg'
import Team2 from '../assets/images/Home/team_2.jpg'

import "../assets/styles/teams-container.css"

function TeamsContainer() {
  return (
    <div className='team-container'>
        <div className="container">
            <h2>TEAMS</h2>

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