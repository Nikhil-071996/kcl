import React, { useEffect, useRef } from 'react'
import arrow from '../../assets/images/Home/Arrow.svg'
import banner0 from '../../assets/images/videos/banner_0.png'
import banner1 from '../../assets/images/videos/banner_1.png'
import banner2 from '../../assets/images/videos/banner_2.png'
import playIcon from '../../assets/images/videos/playicon.svg'
import shareIcon from '../../assets/images/Home/Share_icon.svg'

import './video.css'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

function Videos() {


    return (
        <div className="video-container">
            <div className="container">

                <div className="heading-container">
                    <h2>VIDEOS</h2>
                    <Link href="">
                        <span>View More</span>
                        <img src={arrow} alt="Arrow" />
                    </Link>
                </div>


                {/* <div className="video-content-container">

                <div className="video-cards active">
                    <img src={banner2} alt="banner" className='banner' />
                    <p className='video-title'> New Panthers eye third PKL title under new head coach</p>
                    <div className="video-footer">
                        <div className="play-btn">
                            <img src={playIcon} alt="playIcon" />
                            <p className='fs-12'>1:50 min</p>
                        </div>

                        <img src={shareIcon} alt="shareIcon" className='share-icon' />

                    </div>
                </div>

                <div className="video-cards second-card">
                    <img src={banner1} alt="banner" className='banner' />
                    <p className='video-title'>New Panthers eye third PKL title under new head coach</p>
                    <div className="video-footer">
                        <div className="play-btn">
                            <img src={playIcon} alt="playIcon" />
                            <p className='fs-12'>1:50 min</p>
                        </div>

                        <img src={shareIcon} alt="shareIcon" className='share-icon' />

                    </div>
                </div>

                <div className="video-cards">
                    <img src={banner1} alt="banner" className='banner' />
                    <p className='video-title'>New Panthers eye third PKL title under new head coach</p>
                    <div className="video-footer">
                        <div className="play-btn">
                            <img src={playIcon} alt="playIcon" />
                            <p className='fs-12'>1:50 min</p>
                        </div>

                        <img src={shareIcon} alt="shareIcon" className='share-icon' />

                    </div>
                </div>

            </div> */}


                <div className="video-content-container" >

                    <div className="video-cards active">
                        <img src={banner2} alt="banner" className='banner' />
                        <p className='video-title'> New Panthers eye third KCL title <br />under new head coach</p>
                        <div className="video-footer">
                            <div className="play-btn">
                                <img src={playIcon} alt="playIcon" />
                                <p className='fs-12'>1:50 min</p>
                            </div>

                            <img src={shareIcon} alt="shareIcon" className='share-icon' />

                        </div>
                    </div>

                    <div className="video-cards second-card">
                        <img src={banner1} alt="banner" className='banner' />
                        <p className='video-title'>New Panthers eye third KCL title under new head coach</p>
                        <div className="video-footer">
                            <div className="play-btn">
                                <img src={playIcon} alt="playIcon" />
                                <p className='fs-12'>1:50 min</p>
                            </div>

                            <img src={shareIcon} alt="shareIcon" className='share-icon' />

                        </div>
                    </div>

                    <div className="video-cards">
                        <img src={banner0} alt="banner" className='banner' />
                        <p className='video-title'>New Panthers eye third KCL title under new head coach</p>
                        <div className="video-footer">
                            <div className="play-btn">
                                <img src={playIcon} alt="playIcon" />
                                <p className='fs-12'>1:50 min</p>
                            </div>

                            <img src={shareIcon} alt="shareIcon" className='share-icon' />

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Videos