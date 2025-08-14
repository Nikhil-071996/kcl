import React from 'react'
import arrow from '../../assets/images/Home/Arrow.svg'
import banner0 from '../../assets/images/videos/banner_0.png'
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
                    <Link to="">
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>

                <div className="video-content-container">
                    <div className="video-card">
                        <div className="video-image-container">
                            <img src={banner2} alt="Heartbreak in Cape Town" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">Heartbreak in Cape Town</h3>
                                    <p className="video-subtitle">Relive Uruguay v Netherlands | South Africa 2010</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-image-container">
                            <img src={banner1} alt="Japan's first" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">Japan's first</h3>
                                    <p className="video-subtitle">On this day: Japan v USA | Germany 2011</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-image-container">
                            <img src={banner0} alt="Maradona against Belgium" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">Maradona against Belgium</h3>
                                    <p className="video-subtitle">Relive Argentina v Belgium | Mexico 1986</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="video-card">
                        <div className="video-image-container">
                            <img src={banner1} alt="Alex Morgan's moment" className='video-image' />
                            <div className="video-overlay">
                                <div className="play-button">
                                    <img src={playIcon} alt="play" />
                                </div>
                                <div className="video-info">
                                    <h3 className="video-title">Alex Morgan's moment</h3>
                                    <p className="video-subtitle">Relive England v USA | France 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videos