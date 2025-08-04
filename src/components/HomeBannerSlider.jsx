import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import banner1 from '../assets/images/Home/banner/banner_1.png'
import banner2 from '../assets/images/Home/banner/banner_2.png'
import banner3 from '../assets/images/Home/banner/banner_3.png'
import "../assets/styles/Slider.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

gsap.registerPlugin(Draggable, InertiaPlugin);

const HomeBannerSlider = () => {
  const slidesRef = useRef();


  return (
    <main>
      <div className="slides-container">
        <Splide
          options={{
            type: 'loop',
            perPage: 1,
            gap: '0',
            autoplay: true,
            arrows: true,
            pagination: false,
          }}
          aria-label="React Splide Example"
        >

          <SplideSlide className="slide">
            <img src={banner1} alt="Slide 1" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={banner2} alt="Slide 1" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={banner3} alt="Slide 1" />
          </SplideSlide>
        </Splide>
      </div>
      {/* <div className="controls">
        <button onClick={() => animateSlides(1)}>Prev</button>
        <button onClick={() => animateSlides(-1)}>Next</button>
      </div> */}
    </main>
  );
};

export default HomeBannerSlider;
