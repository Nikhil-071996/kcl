// CardSlider.jsx
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './matchesCards.css';

import '../../assets/styles/CardSlider.css'

import arrow from '../../assets/images/Home/Arrow.svg'
import arrow2 from '../../assets/images/Home/Icon_Arrow.svg'
import { Link } from 'react-router-dom';
import { getRecentFixtures } from '../../data/fixturesData';

const MatchesCards = () => {

    const matchCardRef = useRef();
    const windowWidth = window.innerWidth;

    // Get recent upcoming fixtures from centralized data
    const recentFixtures = getRecentFixtures(4);

    return (
        <div className="slide-container">
            <div className="container">

                <div className="heading-container ">
                    <h2 className='heading'>FIXTURES</h2>
                    <Link className='link-white' to={'/fixtures'}>
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>

                <Splide
                    ref={matchCardRef}
                    options={{
                        type: "slider",
                        pagination: false,
                        arrows: false,
                        perPage: 3,
                        perMove: 1,
                        snap: true,
                        breakpoints: {
                            768: { perPage: 1, trimSpace: false },
                            1024: { perPage: 2, },
                            1300: { perPage: 3, },
                        },
                    }}
                >
                    {recentFixtures.map((fixture, index) => (
                        <SplideSlide
                            key={fixture.id}
                        >
                            <div className="match-card">
                                <div className="match-header">
                                    <div className="match_no">
                                        <div>
                                            <p className='fs-14 kbp'>Kabaddi Champion League, Haryana</p>
                                            <p className='fs-12'>{fixture.date} | {fixture.time}</p>
                                        </div>
                                        <div className='button-purple'>
                                            <p className='fs-12'>{fixture.day}, {fixture.match}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="match-body">
                                    <div className="team">
                                        <img src={fixture.team1Logo} alt={fixture.team1Name} />
                                        <p className='fs-12'>{fixture.team1Name}</p>
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px' }}>
                                        <p style={{ marginTop: '10px' }} className='fs-9'>{fixture.status}</p>
                                        <div className="score-section">
                                            <div className="score">
                                                <span>{fixture.score1}</span> - <span>{fixture.score2}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team">
                                        <img src={fixture.team2Logo} alt={fixture.team2Name} />
                                        <p className='fs-12'>{fixture.team2Name}</p>
                                    </div>
                                </div>


                            </div>

                        </SplideSlide>

                    ))}
                    <SplideSlide></SplideSlide>
                </Splide>
                <div className='arrow-container arrow-container-right' onClick={() => {
                    matchCardRef.current.go("+1");
                }} >
                    <img src={arrow2} />
                </div>

                <div className='arrow-container arrow-container-left' onClick={() => {
                    matchCardRef.current.go("-1");
                }} >
                    <img src={arrow2} />
                </div>
            </div>
        </div>
    );
};

export default MatchesCards;
