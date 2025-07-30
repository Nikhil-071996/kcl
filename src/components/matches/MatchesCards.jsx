// CardSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './matchesCards.css';

import '../../assets/styles/CardSlider.css'

import logo1 from '../../assets/images/register/register-image.png'
import logo2 from '../../assets/images/register/logo-1.png'
import logo3 from '../../assets/images/register/logo-2.png'
import arrow from '../../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom';



const matchData = [
    {
      matchNo: "Match 1",
      teamA: 'Team A',
      logoA: logo1,
      scoreA: 1,
      teamB: 'Team B',
      logoB: logo2,
      scoreB: 2,
      status: 'FINAL',
      venue: "Kalinga Stadium",
      date: "24 July 2025",
      Time: "8:00 PM"
    },
    {
      matchNo: "Match 2",
      teamA: 'Thunder Kings',
      logoA: logo3,
      scoreA: 3,
      teamB: 'Desert Bulls',
      logoB: logo1,
      scoreB: 3,
      status: 'DRAW',
      venue: "Kalinga Stadium",
      date: "24 July 2025",
      Time: "8:00 PM"
    },
    {
      matchNo: "Match 2",
      teamA: 'Thunder Kings',
      logoA: logo2,
      scoreA: 3,
      teamB: 'Desert Bulls',
      logoB: logo3,
      scoreB: 3,
      status: 'DRAW',
      venue: "Kalinga Stadium",
      date: "24 July 2025",
      Time: "8:00 PM"
    },
    {
      matchNo: "Match 3",
      teamA: 'Noida Warriors',
      logoA: logo1,
      scoreA: 0,
      teamB: 'Lucknow Lions',
      logoB: logo2,
      scoreB: 1,
      status: 'FINAL',
      venue: "Kalinga Stadium",
      date: "24 July 2025",
      Time: "8:00 PM"
    },
  ];

const MatchesCards = () => {
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

            <Swiper
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
            </Swiper>
        </div>
    </div>
  );
};

export default MatchesCards;
