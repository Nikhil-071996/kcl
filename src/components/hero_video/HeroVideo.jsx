import video from '../../assets/videos/home/hero_video.mp4'
import './hero_video.css'

function HeroVideo() {
    return (
        <div className='hero-video-container'>
            <video src={video} autoPlay loop muted />
        </div>
    )
}

export default HeroVideo;