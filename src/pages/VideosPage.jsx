import React from 'react'
import banner from '../assets/images/team-page/TeamsPage.png'
import blogImage1 from '../assets/images/videos/main.jpg'
import blogImage2 from '../assets/images/videos/Inside-1.jpeg'
import blogImage3 from '../assets/images/videos/Inside.jpg'
import blogImage4 from '../assets/images/videos/banner_0.png'
import shareIcon from '../assets/images/Home/Share_icon.svg'

import '../assets/styles/photo-page.css'
import '../assets/styles/video-page.css'
import { Link } from 'react-router-dom'


function VideosPage() {
  return (
    <div className='video-page'>
        <div className="page-team-header" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <div className="content">
                    <h2>Videos</h2>
                </div>
            </div>
        </div>

        <div className="photo-page-container">
        
                <div className="container">
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage1} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage2} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage3} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage4} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage2} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage4} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>

                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage1} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage2} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage3} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage4} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage2} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                  <Link to={'/media/video/details'} className="photo-page-card">
                     <div className="image-container">
                      <img src={blogImage4} alt="blogimage" />
                     </div>
                     <div className="body-card">
                      <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                      <div className="footer-cards">
                        <div className="crd-date">01 July, 2025</div>
                        <img src={shareIcon} className='shareIcon' alt="SHARE" />
                      </div>
                     </div>
                  </Link>
        
                </div>
        
                </div>

    </div>
  )
}

export default VideosPage