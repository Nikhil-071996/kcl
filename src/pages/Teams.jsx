import React from 'react'
import Team1 from '../assets/images/Home/team_1.jpg'
import Team2 from '../assets/images/Home/team_2.jpg'
import arrow from '../assets/images/Home/Arrow.svg'

function Teams() {

    
    
  return (
    <div className='teamPage'>
            <div className="page-team-header">
                <div className="container">
                    <div className="content">
                        <h2>Teams</h2>
                    </div>
                </div>
            </div>
    
    <div className='team-container'>
        <div className="container">
            <div className="teams" style={{marginBottom: '50px'}}>

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
            
    
    
        </div>
  )
}

export default Teams