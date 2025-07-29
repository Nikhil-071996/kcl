import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import logo1 from '../assets/images/register/register-image.png'
import '../assets/styles/CardSlider.css'

function MatchesCardsSlider() {
  const matchData = [
    {
      matchNo: "Match 1",
      teamA: 'Team A',
      logoA: logo1,
      scoreA: 1,
      teamB: 'Team B',
      logoB: logo1,
      scoreB: 2,
      status: 'FINAL',
      venue: "Kalinga Stadium",
      date: "Apr 24",
      Time: "8:00 PM"
    },
    {
      matchNo: "Match 2",
      teamA: 'Thunder Kings',
      logoA: logo1,
      scoreA: 3,
      teamB: 'Desert Bulls',
      logoB: logo1,
      scoreB: 3,
      status: 'DRAW',
      venue: "Kalinga Stadium",
      date: "Apr 24",
      Time: "8:00 PM"
    },
    {
      matchNo: "Match 3",
      teamA: 'Noida Warriors',
      logoA: logo1,
      scoreA: 0,
      teamB: 'Lucknow Lions',
      logoB: logo1,
      scoreB: 1,
      status: 'FINAL',
      venue: "Kalinga Stadium",
      date: "Apr 24",
      Time: "8:00 PM"
    },
  ];

  return (
    <div className="matches-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]} // Add EffectFade if you switch effect
        effect="coverflow" // Or use "fade"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={3}
        autoplay={{ delay: 3000 }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
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
        className="swiper"
      >
        {matchData.map((match, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="match-card">
              <div className="match-header">
                <div className="match_no">
                  <p>{match.matchNo}</p>
                </div>
              </div>

              <div className="match-body">
                <div className="team">
                  <img src={match.logoA} alt={match.teamA} />
                </div>

                <div className="score-section">
                  <div className="score">
                    <span>{match.scoreA}</span> - <span>{match.scoreB}</span>
                  </div>
                </div>

                <div className="team">
                  <img src={match.logoB} alt={match.teamB} />
                </div>
              </div>

              <div className="match-footer">
                <div className="venue">
                  <h3>{match.venue}</h3>
                  <h3>{match.date}, {match.Time}</h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MatchesCardsSlider;
