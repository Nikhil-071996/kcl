import React, { useRef } from 'react'
import '@splidejs/react-splide/css';
import blogImage from '../../assets/images/Home/blog-image.jpg'
import arrow from '../../assets/images/Home/Arrow.svg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'
import './SocialMediaPosts.css'

import instagram from '../../assets/images/footer/instagram.svg'
import facebook from '../../assets/images/footer/facebook.png'
import youtube from '../../assets/images/footer/youtube.svg'
import linkedIn from '../../assets/images/footer/linked_in.svg'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import { Autoplay } from 'swiper/modules';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function SocialMediaPosts() {

  const socialMediaRef = useRef(null);
  const windowWidth = window.innerWidth;

  return (
    <div className='social-media-Posts'>
      <div className="container">


        <div className="social-head">
          <h2>SOCIAL MEDIA</h2>

          <div className="social-icons-social-media">
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
          </div>
        </div>

        <Splide
              className="blogs-content-container"
              ref={socialMediaRef}
              options={{
                type: "loop", 
                pagination: false, 
                drag: "free", 
                arrows: false, 
                perPage: 4, 
                perMove: 1, 
                autoScroll: {
                  speed: 1.2,
                  pauseOnHover: true,
                  pauseOnFocus: false,
                  rewind: false,
                },
                // snap   : (windowWidth < 990) ? true : false,
                gap: windowWidth ? "20px" : "10px" , 
                breakpoints: {
                  320: { perPage: 1 ,focus  : 'center',trimSpace: false,},
                  460: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  560: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  1024: { perPage: 3 },
                  1300: { perPage: 4 },
                },
                

              }}
              extensions={{ AutoScroll }}
          >
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                        marginLeft: (windowWidth > 990) ? '2.5%' : '0', 
                      }}
            >
              <div className="blog">
                  <img src={blogImage} alt="blogImage" />
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                        marginLeft: (windowWidth > 990) ? '2.5%' : '0', 
                      }}
            >
              <div className="blog">
                  <img src={blogImage} alt="blogImage" />
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                        marginLeft: (windowWidth > 990) ? '2.5%' : '0', 
                      }}
            >
              <div className="blog">
                  <img src={blogImage} alt="blogImage" />
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                        marginLeft: (windowWidth > 990) ? '2.5%' : '0', 
                      }}
            >
              <div className="blog">
                  <img src={blogImage} alt="blogImage" />
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        padding: '50px 10px',
                        marginLeft: (windowWidth > 990) ? '2.5%' : '0', 
                      }}
            >
              <div className="blog">
                  <img src={blogImage} alt="blogImage" />
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
          </Splide>
      </div>

    </div>
  )
}

export default SocialMediaPosts