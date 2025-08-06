import React, { useRef } from 'react'
import '@splidejs/react-splide/css';
import blogImage1 from '../../assets/images/Social/1.png'
import blogImage2 from '../../assets/images/Social/2.png'
import './SocialMediaPosts.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';

function SocialMediaPosts() {

  const socialMediaRef = useRef(null);
  const windowWidth = window.innerWidth;

  const blogImages = [blogImage1, blogImage2, blogImage1, blogImage2]

  return (
    <div className='social-media-Posts'>
      <div className="container">


        <div className="social-head">
          <h2>SOCIAL MEDIA</h2>

          {/* <div className="social-icons-social-media">
            <Link>
                <img src={instagram} alt="" />
            </Link>

            <Link>
                <img src={facebook} alt="" />
            </Link>

            <Link>
                <img src={youtube} alt="" />
            </Link>

            <Link>
                <img src={linkedIn} alt="" />
            </Link>
          </div> */}
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
            // autoScroll: {
            //   speed: 1.2,
            //   pauseOnHover: true,
            //   pauseOnFocus: false,
            //   rewind: false,
            // },
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
        // extensions={{ AutoScroll }}
        // extensions={{ Autoplay }}
        >
          {blogImages.map((image, index) => (
            <SplideSlide key={index} >
              <div className="social-post">
                <div className="image-container">
                  <img src={image} alt="socialPost" />
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

    </div>
  )
}

export default SocialMediaPosts