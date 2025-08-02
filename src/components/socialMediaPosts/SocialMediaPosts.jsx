import React, { useRef } from 'react'
import '@splidejs/react-splide/css';
import blogImage1 from '../../assets/images/Social/1.png'
import blogImage2 from '../../assets/images/Social/2.png'
import blogImage3 from '../../assets/images/Social/3.png'
import blogImage4 from '../../assets/images/Social/4.png'
import arrow from '../../assets/images/Home/Arrow.svg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'
import './SocialMediaPosts.css'

import instagram from '../../assets/images/footer/instagram.svg'
import facebook from '../../assets/images/footer/facebook.png'
import youtube from '../../assets/images/footer/youtube.svg'
import linkedIn from '../../assets/images/footer/linked_in.svg'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';

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
                autoplay : true,
                // autoScroll: {
                //   speed: 1.2,
                //   pauseOnHover: true,
                //   pauseOnFocus: false,
                //   rewind: false,
                // },
                snap   : true,
                gap: windowWidth ? "20px" : "10px" , 
                breakpoints: {
                  320: { perPage: 1 ,focus  : 'center',trimSpace: false,},
                  460: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  560: { perPage: 1,  focus  : 'center',trimSpace: false,},
                  1024: { perPage: 3 },
                  1300: { perPage: 4 },
                },
                

              }}
              // extensions={{ AutoScroll }}
              // extensions={{ Autoplay }}
          >
            <SplideSlide 
              style={{
                        paddingBottom: '50px',
                      }}
            >
              <div className="blog">
                    <div className="image-container">
                      <img src={blogImage1} alt="blogImage" />
                    </div>
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        paddingBottom: '50px',
                      }}
            >
              <div className="blog">
                    <div className="image-container">
                      <img src={blogImage2} alt="blogImage" />
                    </div>
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        paddingBottom: '50px',
                      }}
            >
              <div className="blog">
                    <div className="image-container">
                      <img src={blogImage3} alt="blogImage" />
                    </div>
                  
                  <div className="blog-info">
                      <p>Lorem ipsum dolor sit amet consectetur </p>
                      <img src={shareIcon} alt="share" width={10} />
                  </div>
              </div>
            </SplideSlide>
            <SplideSlide 
              style={{
                        paddingBottom: '50px',
                      }}
            >
              <div className="blog">
                    <div className="image-container">
                      <img src={blogImage4} alt="blogImage" />
                    </div>
                  
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