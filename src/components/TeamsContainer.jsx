import React, { useRef } from 'react'
import Team1 from '../assets/images/Home/logos/bhiwani_bulls.png'
import Team2 from '../assets/images/Home/logos/faridabad_fighters.png'
import Team3 from '../assets/images/Home/logos/gurgaon_gurus.png'
import Team4 from '../assets/images/Home/logos/hisar_heros.png'
import Team5 from '../assets/images/Home/logos/karnal_kings.png'
import Team6 from '../assets/images/Home/logos/panipat_panther.png'
import Team7 from '../assets/images/Home/logos/rohtak_royals.png'
import Team8 from '../assets/images/Home/logos/sonipat_stars.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "../assets/styles/teams-container.css"
import arrow from '../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom'

function TeamsContainer() {

    const teamCardsRef = useRef();

    const windowWidth = window.innerWidth;

    const teams = [Team7, Team4, Team1, Team2, Team8, Team3, Team5, Team6];


    return (
        <div className='team-container'>
            <div className="container">

                <div className="heading-container">
                    <h2>TEAMS</h2>
                    <Link to={'/team'}>
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>

                {/* <div className="teams">

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

            </div> */}


                <Splide
                    ref={teamCardsRef}
                    options={{
                        type: "loop",
                        pagination: false,
                        drag: "free",
                        arrows: false,
                        perPage: 5,
                        perMove: 1,
                        autoplay: true,
                        interval: 1000,
                        snap: true,
                        gap: '16px',
                        breakpoints: {
                            1300: { perPage: 4, },
                            1024: { perPage: 3, },
                            560: { perPage: 1, focus: 'center', trimSpace: false },
                            460: { perPage: 1, focus: 'center', trimSpace: false },
                            320: { perPage: 1, focus: 'center', trimSpace: false },
                        },


                    }}>

                    {teams.map((team, index) => (
                        <SplideSlide>
                            <Link to={'/team-page'} className="team-card">
                                <img src={team} alt={`Team ${index + 1}`} />
                            </Link>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    )
}

export default TeamsContainer