import React from 'react'
import banner from '../assets/images/team-page/TeamsPage.png'
import blogsData from '../api/blogs.json';

import blogImage1 from '../assets/images/News/1.jpeg'
import blogImage2 from '../assets/images/News/2.jpeg'
import blogImage3 from '../assets/images/News/3.jpeg'
import blogImage4 from '../assets/images/News/4.jpg'
import blogImage from '../assets/images/News/Main.jpeg'
import kclLaunch from '../assets/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp'
import kclLaunch2 from '../assets/images/News/kcl-annouance.webp'

import shareIcon from '../assets/images/Home/Share_icon.svg'

import '../assets/styles/photo-page.css'
import '../assets/styles/video-page.css'
import { Link } from 'react-router-dom'


const images = {
  "Main.jpeg": blogImage,
  "1.jpeg": blogImage1,
  "2.jpeg": blogImage2,
  "3.jpeg": blogImage3,
    "Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp": kclLaunch,
      "kcl-annouance.webp": kclLaunch2,
  
  "4.jpg": blogImage4
};


function BlogsPage() {
  return (
    <div className='video-page'>
            <div className="page-team-header" style={{ backgroundImage: `url(${banner})` }}>
                <div className="container">
                    <div className="content">
                        <h2>Latest News</h2>
                    </div>
                </div>
            </div>
    
            <div className="photo-page-container blogs">
            
                    <div className="container">

                      {blogsData.length > 0 && blogsData.map((blog, index) => (
  <Link 
    to={`/blogs/details/${blog.id}`} 
    key={index} 
    className="photo-page-card"
  >
    <div className="image-container">
      <img src={images[blog.image]} alt={blog.title || "blog image"} />
    </div>
    <div className="body-card">
      <h3>{blog.title}</h3>
      <div className="footer-cards">
        <div className="crd-date">
          {blog.date}
        </div>
        <img src={shareIcon} className="shareIcon" alt="SHARE" />
      </div>
    </div>
  </Link>
))}

            
                      
            
                      {/* <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
                         <div className="image-container">
                          <img src={blogImage} alt="blogimage" />
                         </div>
                         <div className="body-card">
                          <h3>KCL Kabaddi Premier League 2025 - Photo Gallery</h3>
                          <div className="footer-cards">
                            <div className="crd-date">01 July, 2025</div>
                            <img src={shareIcon} className='shareIcon' alt="SHARE" />
                          </div>
                         </div>
                      </Link>
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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

                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
            
                      <Link to={'/blogs/details'} className="photo-page-card">
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
                      </Link> */}
            
                    </div>
            
                    </div>
    
        </div>
  )
}

export default BlogsPage