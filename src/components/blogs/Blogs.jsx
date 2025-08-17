import React from 'react'
import '../../assets/styles/blogs.css'
import blogImage1 from '../../assets/images/News/1.jpeg'
import blogImage2 from '../../assets/images/News/2.jpeg'
import blogImage3 from '../../assets/images/News/3.jpeg'
import blogImage4 from '../../assets/images/News/4.jpg'
import blogImage from '../../assets/images/News/Main.jpeg'

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
                            <img src={blogImage} alt="blogImage" />
                        </div>
                        <div className="date-container">24th July</div>
                        <div className="blog-info">
                            <p>KCL Haryana kicks off grand trials across the state, thousands of young kabaddi players showcase their talent.</p>
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
                                <p>From Sonipat to Hisar, Panipat to Gurugram – KCL trials witness record participation, building excitement ahead of league.</p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage2} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>Kabaddi Champions League Haryana 2025 to feature star-studded celebrity events blending sport and entertainment.</p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage3} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>India’s finest kabaddi champions to battle it out on the KCL Haryana mat this season.</p>
                                <img src={arrow} alt="arrow" width={20} />
                            </div>
                        </Link>

                        <Link to={'/blogs/details'} className="blog blog-small">
                            <div className="image-container">
                                <img src={blogImage4} alt="blogImage" />
                            </div>
                            <div className="date-container">24th July</div>
                            <div className="blog-info">
                                <p>KCL Haryana 2025 promises to bring grassroots heroes and international kabaddi icons together on one stage.</p>
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