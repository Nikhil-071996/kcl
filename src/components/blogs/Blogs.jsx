import React from 'react'
import '../../assets/styles/blogs.css'
import blogImage from '../../assets/images/Home/blog-image.jpg'
import arrow from '../../assets/images/Home/Arrow.svg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'

function Blogs() {
  return (
    <div className='blogs' >
        <div className="container">
            <div className="heading-container">
                <h2>Latest Updates</h2>
                <a href="">
                    <span>View More</span>
                    <img src={arrow} alt="Arrow" />
                </a>
            </div>

            <div className="blogs-content-container">

                

                <div className="blog">
                    <img src={blogImage} alt="blogImage" />
                    <div className="date-container">24th July</div>
                    <div className="blog-info">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <img src={shareIcon} alt="share" width={10} />
                    </div>
                </div>

                <div className="blog">
                    <img src={blogImage} alt="blogImage" />
                    <div className="date-container">24th July</div>
                    <div className="blog-info">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <img src={shareIcon} alt="share" width={10} />
                    </div>
                </div>
                <div className="blog">
                    <img src={blogImage} alt="blogImage" />
                    <div className="date-container">24th July</div>
                    <div className="blog-info">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <img src={shareIcon} alt="share" width={10} />
                    </div>
                </div>
                <div className="blog">
                    <img src={blogImage} alt="blogImage" />
                    <div className="date-container">24th July</div>
                    <div className="blog-info">
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                        <img src={shareIcon} alt="share" width={10} />
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Blogs