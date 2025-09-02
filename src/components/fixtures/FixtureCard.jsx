import React from 'react'
import stadiumIcon from '../../assets/images/icons/stadium-icon.svg'
import clockIcon from '../../assets/images/icons/clock-icon.svg'
import arrow from '../../assets/images/icons/right.svg'
import { Link } from 'react-router-dom'

function FixtureCard({
    day,
    match,
    time,
    stadium,
    team1Logo,
    team1Name,
    team2Logo,
    team2Name,
    score1 = 0,
    score2 = 0,
    status = "Full Time"
}) {
    return (
        <Link to={'/score'} className="fixture-card">
            <div className="section-1">
                <h3 className='fs-27'>{day}, {match}</h3>
                <div className='icon-text-group-container'>
                    <div className='fs-13 icon-text-group'>
                        <img src={clockIcon} alt="clock" />
                        <p className='fs-13'>{time}</p>
                    </div>
                    <div className='fs-13 icon-text-group'>
                        <img src={stadiumIcon} alt="stadium" />
                        <p className='fs-13'>{stadium}</p>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="fitures-match-body">
                    <div className="fitures-team">
                        <img src={team1Logo} alt={team1Name} />
                        <p className='fs-18 teams-name'>{team1Name}</p>
                    </div>

                    <div className='full-time-container'>
                        <p style={{ marginTop: '10px' }} className='full-time'>{status}</p>
                        <div className="fitures-score-section">
                            <div className="fitures-score">
                                <span>{score1}</span> - <span>{score2}</span>
                            </div>
                        </div>
                    </div>

                    <div className="fitures-team">
                        <p className='fs-18 teams-name'>{team2Name}</p>
                        <img src={team2Logo} alt={team2Name} />
                    </div>
                    <img src={arrow} alt="arrow" className='arrow-icon' />
                </div>
            </div>
        </Link>
    )
}

export default FixtureCard 