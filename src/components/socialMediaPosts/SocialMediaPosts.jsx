import React, { useRef } from 'react'
import '@splidejs/react-splide/css';
import blogImage1 from '../../assets/images/Social/1.jpg'
import blogImage2 from '../../assets/images/Social/2.jpg'
import blogImage3 from '../../assets/images/Social/3.jpg'
import blogImage4 from '../../assets/images/Social/4.jpg'
import blogImage5 from '../../assets/images/Social/5.jpg'
import blogImage6 from '../../assets/images/Social/6.jpg'
import blogImage7 from '../../assets/images/Social/7.jpg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'
import './SocialMediaPosts.css'

import { Splide, SplideSlide } from '@splidejs/react-splide';

function SocialMediaPosts() {

  const socialMediaRef = useRef(null);
  const windowWidth = window.innerWidth;

  const blogImages = [blogImage1, blogImage2, blogImage3, blogImage4, blogImage5, blogImage6, blogImage7]

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
          className="blogs-content-container"
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
              320: { perPage: 1, focus: 'center', trimSpace: false, },
              460: { perPage: 1, focus: 'center', trimSpace: false, },
              560: { perPage: 1, focus: 'center', trimSpace: false, },
              1024: { perPage: 3 },
              1300: { perPage: 4 },
            },


          }}
        // extensions={{ AutoScroll }}
        // extensions={{ Autoplay }}
        >
          {blogImages.map((image, index) => (
            <SplideSlide
              key={index}
              style={{
                paddingBottom: '50px',
              }}
            >
              <div className="blog">
                <div className="image-container">
                  <img src={image} alt="blogImage" />
                </div>

                <div className="blog-info">
                  <p>Lorem ipsum dolor sit amet consectetur </p>
                  <img src={shareIcon} alt="share" width={10} />
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