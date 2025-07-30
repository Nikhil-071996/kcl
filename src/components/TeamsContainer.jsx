import React, { useRef } from 'react'
import Team1 from '../assets/images/Home/team_1.jpg'
import Team2 from '../assets/images/Home/team_2.jpg'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "../assets/styles/teams-container.css"
import arrow from '../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom'

function TeamsContainer() {

    const teamCardsRef = useRef();

    const windowWidth = window.innerWidth;


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
              className="blogs-content-container"
              ref={teamCardsRef}
              options={{
                type: "loop", 
                pagination: false, 
                drag: "free", 
                arrows: false, 
                perPage: 4, 
                perMove: 1, 
                autoplay : true,
                interval: 3000,
                snap   :  true ,
                gap: windowWidth ? "20px" : "10px" , 
                breakpoints: {
                  320: { perPage: 1 ,focus  : 'center',trimSpace: false,},
                  460: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  560: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  1024: { perPage: 3 },
                  1300: { perPage: 4 },
                },
                

              }}
              
          >
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team1} alt="Team1" />
                </div>
            </SplideSlide>

            <SplideSlide 
              style={{
                        padding: '50px 10px',
                      }}
            >
                <div className="team-card">
                    <img src={Team2} alt="Team1" />
                </div>
            </SplideSlide>

          </Splide>
        </div>
    </div>
  )
}

export default TeamsContainer