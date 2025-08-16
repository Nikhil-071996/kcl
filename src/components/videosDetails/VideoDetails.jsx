import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import blogImage1 from '../../assets/images/videos/main.jpg'
import blogImage2 from '../../assets/images/videos/Inside-1.jpeg'
import blogImage3 from '../../assets/images/videos/Inside.jpg'
import blogImage4 from '../../assets/images/videos/banner_0.png'
import './pictureDetails.css';


const VideoDetails = () => {
  

  return (
    <div className="blog-detail-wrapper">
      <div className="container">
        <div className="blog-main">
          {/* Left content */}
          <div className="blog-content">
            <h1>
              3rd Place Match Highlights: Bengaluru Bravehearts vs Hyderabad Heroes
            </h1>
            <p className="blog-date">30 June, 2025</p>

            <div className="blog-image">
              <img
                src={blogImage1}
                alt="Chennai Bulls Champions"
              />
            </div>

            
          </div>

          {/* Sidebar */}
          <aside className="blog-sidebar">
            <h3>More Videos</h3>

            {[blogImage2, blogImage3, blogImage2, blogImage3].map((img, index) => (
              <div key={index} className={`sidebar-item ${index === 0 ? "firsr-item" : ""}`}>
                <img src={img} alt={`Update ${index + 1}`} />
                <div>
                  <p>
                    GMR Rugby Premier League Final Preview: Chennai Bulls to lock horns with Delhi
                    Redz in high-stakes title clash
                  </p>
                  <span>28 Jun, 2025</span>
                </div>
              </div>
            ))}
          </aside>
        </div>

      </div>
    </div>
  );
};

export default VideoDetails;
