import React from 'react'
import '../../assets/styles/blogs.css'
import blogsData from '../../api/blogs.json';
import blogImage1 from '../../assets/images/News/1.jpeg'
import blogImage2 from '../../assets/images/News/2.jpeg'
import blogImage3 from '../../assets/images/News/3.jpeg'
import blogImage4 from '../../assets/images/News/4.jpg'
import blogImage from '../../assets/images/News/Main.jpeg'
import kclLaunch from '../../assets/images/News/Kabaddi-Champions-League-Haryana-Launched-in-Sonipat.webp'
import kclLaunch2 from '../../assets/images/News/kcl-annouance.webp'

import arrow from '../../assets/images/Home/Arrow.svg'
// import shareIcon from '../../assets/images/Home/Share_icon.svg'
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

function Blogs() {
    return (
        <div className='blogs' >
            <div className="container">
                <div className="heading-container">
                    <h2>Latest Updates</h2>
                    <Link to="/blogs">
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>

                <div className="blogs-content-container">
          {blogsData.length > 0 && (
            <>
              {/* Large banner */}
              <Link to={`/blogs/details/${blogsData[0].id}`} className="blog blog-large">
                <div className="image-container">
                  <img src={images[blogsData[0].image]} alt="blogImage" />
                </div>
                <div className="date-container">{blogsData[0].date}</div>
                <div className="blog-info">
                  <p>{blogsData[0].title}</p>
                  <img src={arrow} alt="arrow" width={20} />
                </div>
              </Link>

              {/* Grid blogs */}
              <div className="blogs-grid">
                {blogsData.slice(1,5).map(blog => (
                  <Link key={blog.id} to={`/blogs/details/${blog.id}`} className="blog blog-small">
                    <div className="image-container">
                      <img src={images[blog.image]} alt="blogImage" />
                    </div>
                    <div className="date-container">{blog.date}</div>
                    <div className="blog-info">
                      <p>{blog.title}</p>
                      <img src={arrow} alt="arrow" width={20} />
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>

            </div>

        </div>
    )
}

export default Blogs