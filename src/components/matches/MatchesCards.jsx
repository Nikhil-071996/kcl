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

import bhiwani from '../../assets/images/teams_logo_small/bhiwani.png'
import faridabad from '../../assets/images/teams_logo_small/faridabad.png'
import gurgaon from '../../assets/images/teams_logo_small/gurgaon.png'
import hisar from '../../assets/images/teams_logo_small/hisar.png'
import karnal from '../../assets/images/teams_logo_small/karnal.png'
import panipat from '../../assets/images/teams_logo_small/panipat.png'
import panipatOnBlack from '../../assets/images/teams_logo_small/panipat_on_black.png'
import rohtak from '../../assets/images/teams_logo_small/rohtak.png'
import sonipat from '../../assets/images/teams_logo_small/sonipat.png'
import logo from '../../assets/images/teams_logo_small/logo.png'
import arrow from '../../assets/images/Home/Arrow.svg'
import arrow2 from '../../assets/images/Home/Icon_Arrow.svg'
import { Link } from 'react-router-dom';



const matchData = [
    {
        matchNo: "Match 1",
        teamA: 'Team A',
        logoA: bhiwani,
        scoreA: 0,
        teamB: 'Team B',
        logoB: hisar,
        scoreB: 0,
        status: 'FINAL',
        venue: "Kalinga Stadium",
        date: "24 July 2025",
        Time: "8:00 PM"
    },
    {
        matchNo: "Match 2",
        teamA: 'Thunder Kings',
        logoA: panipat,
        scoreA: 0,
        teamB: 'Desert Bulls',
        logoB: sonipat,
        scoreB: 0,
        status: 'DRAW',
        venue: "Kalinga Stadium",
        date: "24 July 2025",
        Time: "8:00 PM"
    },
    {
        matchNo: "Match 2",
        teamA: 'Thunder Kings',
        logoA: karnal,
        scoreA: 0,
        teamB: 'Desert Bulls',
        logoB: rohtak,
        scoreB: 0,
        status: 'DRAW',
        venue: "Kalinga Stadium",
        date: "24 July 2025",
        Time: "8:00 PM"
    },
    {
        matchNo: "Match 100",
        teamA: 'Noida Warriors',
        logoA: gurgaon,
        scoreA: 0,
        teamB: 'Lucknow Lions',
        logoB: faridabad,
        scoreB: 0,
        status: 'FINAL',
        venue: "Kalinga Stadium",
        date: "24 July 2025",
        Time: "8:00 PM"
    },
];

const MatchesCards = () => {

    const matchCardRef = useRef();
    const windowWidth = window.innerWidth;

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

                {/* <Swiper
                modules={[Navigation, Pagination]}
                slidesPerView={3}
                spaceBetween={25}
                loop={true}
                grabCursor={true}
                pagination={{
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true,
                }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                }}
                breakpoints={{
                0: {
                    slidesPerView: 1,
                },
                520: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 3,
                },
                }}
            >
                {matchData.map((match, index) => (
                <SwiperSlide key={index}>
                    <div className="match-card">
                    <div className="match-header">
                        <div className="match_no">
                            <div>
                                <p className='fs-12'>Kabaddi Champion League, Haryana</p>
                                <p className='fs-9'>{match.date} | {match.Time}</p>
                            </div>
                            <div className='button-purple'>
                                <p className='fs-12'>Day 18, {match.matchNo}</p>
                            </div>
                        </div>
                    </div>

                    <div className="match-body">
                        <div className="team">
                            <img src={match.logoA} alt={match.teamA} />
                            <p className='fs-12'>Panipat Panthers</p>
                        </div>

                        <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
                            <p style={{marginTop: '10px'}}>Full Time</p>
                            <div className="score-section">
                            <div className="score">
                                <span>{match.scoreA}</span> - <span>{match.scoreB}</span>
                            </div>
                            </div>
                        </div>

                        <div className="team">
                            <img src={match.logoB} alt={match.teamB} />
                            <p className='fs-12'>Panipat Panthers</p>
                        </div>
                    </div>

                    
                    </div>
                </SwiperSlide>
                ))}

                <div className="swiper-button-next swiper-navBtn" />
                <div className="swiper-button-prev swiper-navBtn" />
                <div className="swiper-pagination" />
            </Swiper> */}

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
                            1300: { perPage: 3, },
                            1024: { perPage: 3, },
                            560: { perPage: 1, trimSpace: false },
                            460: { perPage: 1, trimSpace: false },
                            320: { perPage: 1, trimSpace: false },
                        },
                    }}
                >
                    {matchData.map((match, index) => (
                        <SplideSlide
                            key={index}
                        >
                            <div className="match-card">
                                <div className="match-header">
                                    <div className="match_no">
                                        <div>
                                            <p className='fs-14 kbp'>Kabaddi Champion League, Haryana</p>
                                            <p className='fs-12'>{match.date} | {match.Time}</p>
                                        </div>
                                        <div className='button-purple'>
                                            <p className='fs-12'>Day 18, {match.matchNo}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="match-body">
                                    <div className="team">
                                        <img src={match.logoA} alt={match.teamA} />
                                    </div>

                                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px' }}>
                                        <p style={{ marginTop: '10px' }} className='fs-9'>Full Time</p>
                                        <div className="score-section">
                                            <div className="score">
                                                <span>{match.scoreA}</span> - <span>{match.scoreB}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="team">
                                        <img src={match.logoB} alt={match.teamB} />
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
