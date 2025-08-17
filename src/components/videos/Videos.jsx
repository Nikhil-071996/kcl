import React from 'react'
import arrow from '../../assets/images/Home/Arrow.svg'
import banner0 from '../../assets/images/videos/video_cover.jpg'
import banner1 from '../../assets/images/videos/banner_1.png'
import banner2 from '../../assets/images/videos/banner_2.png'
import playIcon from '../../assets/images/videos/playicon.svg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'

import './video.css'
import { Link } from 'react-router-dom'

function Videos() {
    return (
        <div className="video-container">
            <div className="container">
                <div className="heading-container">
                    <h2>VIDEOS</h2>
                    <Link to="/media/videos">
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>

                <div className="video-content-container">
                    <Link to={'/media/video/details'} className="video-card">
                        <div className="video-image-container">
                            <img src={banner0} alt="KCL Trials Begin" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">KCL Trials Begin</h3>
                                    <p className="video-subtitle">Gaon Gaon Se Uthenge Champions</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/media/video/details'} className="video-card">
                        <div className="video-image-container">
                            <img src={banner0} alt="Japan's first" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">KCL Auction 2025</h3>
                                    <p className="video-subtitle">Stars Ab Honge Boliyan Mein</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/media/video/details'} className="video-card">
                        <div className="video-image-container">
                            <img src={banner0} alt="Maradona against Belgium" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">KCL Pre-Launch</h3>
                                    <p className="video-subtitle">Haryana Sports Ka Naya Itihas</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/media/video/details'} className="video-card">
                        <div className="video-image-container">
                            <img src={banner0} alt="KCL Press Conference" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">KCL Press Conference</h3>
                                    <p className="video-subtitle">Sabse Bada Kabaddi Announcement</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Videos