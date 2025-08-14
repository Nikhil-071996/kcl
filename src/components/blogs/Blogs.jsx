import React from 'react'
import '../../assets/styles/blogs.css'
import blogImage1 from '../../assets/images/News/1.png'
import blogImage2 from '../../assets/images/News/2.png'
import blogImage3 from '../../assets/images/News/3.png'
import blogImage4 from '../../assets/images/News/4.png'
import arrow from '../../assets/images/Home/Arrow.svg'
// import shareIcon from '../../assets/images/Home/Share_icon.svg'
import { Link } from 'react-router-dom'

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
                    {/* Large banner at the top */}
                    <Link to={'/blogs/details'} className="blog blog-large">
                        <div className="image-container">
                            <img src={blogImage4} alt="blogImage" />
                        </div>
                        <div className="date-container">24th July</div>
                        <div className="blog-info">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                            <img src={arrow} alt="arrow" width={20} />
                        </div>
                    </Link>

                    {/* Four smaller banners in 2x2 grid */}
                    <div className="blogs-grid">
                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage1} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage2} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage3} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage4} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Blogs