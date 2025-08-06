import React, { useRef } from 'react'
import '@splidejs/react-splide/css';
import blogImage1 from '../../assets/images/Social/1.png'
import blogImage2 from '../../assets/images/Social/2.png'
import './SocialMediaPosts.css'
import arrow from '../../assets/images/Home/Arrow.svg'
import { Link } from 'react-router-dom'

import { Splide, SplideSlide } from '@splidejs/react-splide';

function SocialMediaPosts() {

  const socialMediaRef = useRef(null);
  const windowWidth = window.innerWidth;

  const blogImages = [blogImage1, blogImage2, blogImage1, blogImage2]

  return (
    <div className='social-media-container'>
      <div className="container">

        <div className="heading-container">
          <h2>SOCIAL MEDIA</h2>
          <Link to={'/social'}>
            <span>View More</span>
            <img src={arrow} alt="Arrow" />
          </Link>
        </div>

        <Splide
          className="social-content-container"
          ref={socialMediaRef}
          options={{
            type: "loop",
            pagination: false,
            drag: "free",
            arrows: false,
            perPage: 4,
            perMove: 1,
            autoplay: true,
            snap: true,
            gap: windowWidth ? "20px" : "10px",
            breakpoints: {
              1440: { perPage: 3.5, },
              1300: { perPage: 2.5 },
              875: { perPage: 2, focus: 'center', trimSpace: false, },
              640: { perPage: 1.5, focus: 'center', trimSpace: false, },
              514: { perPage: 1, focus: 'center', trimSpace: false, },
            },
          }}
        >
          {blogImages.map((image, index) => (
            <SplideSlide key={index} >
              <Link to={'/social-post'} className="social-post-card">
                <div className="image-container">
                  <img src={image} alt="socialPost" />
                </div>
              </Link>
            </SplideSlide>
          ))}
        </Splide>
      </div>

    </div>
  )
}

export default SocialMediaPosts