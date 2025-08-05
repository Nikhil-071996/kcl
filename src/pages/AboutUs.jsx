import '../assets/styles/about.css'
import mohit from '../assets/images/about/mohit.png'
import rajesh from '../assets/images/about/rajesh.png'
import map from '../assets/images/about/map.png'
import akah from '../assets/images/about/akah.png'

function AboutUs() {
    return (
        <div className="about-us-page">
            <div className="about-us-container top">
                <div className='about-us-top-content'>
                    <h2>Kabaddi <br />Champions League Haryana</h2>
                    <p>In Haryana, kabaddi is more than a game — it's an emotion. It lives in every gaon, is played in every akhada, and is loved by all — from kids to desi taus. Every village has a team, every mela a match, and every street echoes with <span>“kabaddi… kabaddi…”</span> <br /><br />Kabaddi Champions League Haryana is built on this passion — to give village champions a professional platform. Now, the same raw talent from our gaon will be seen on TV screens and big stadiums, playing for the world to watch.This isn't just a league — It's Haryana's kabaddi dream, going from <span>gaon to glory.</span></p>
                </div>
                <div className='about-us-top-image'>
                    <img src={map} alt="Map" />
                </div>
                <div className='about-us-top-content-description'>
                    <p>Kabaddi Champions League Haryana is officially recognized by the <span>Amateur Kabaddi Association of Haryana (AKAH),</span> with exclusive rights granted to organize the league across the state. This partnership has been formed for the welfare and growth of kabaddi in Haryana, with a strong focus on uplifting grassroots players, providing them with professional exposure, and nurturing local talent. With a deep commitment to fairness, transparency, and player development, KCL Haryana also aligns with the <span>“Drug-Free Haryana”</span> campaign initiated by the Government of Haryana — promoting a culture of discipline, fitness, and pride through sports.</p>
                    <img src={akah} alt="AKAH" />
                </div>
            </div>
            <div className='about-us-container bottom'>
                <div className='about-us-bottom-content rajesh'>
                    <div className='about-us-bottom-content-description'>
                        <h4>Rajesh Narwal</h4>
                        <p>A renowned all-rounder who has represented India at the international level. Known for his game sense, strength, and gaon se nikla dum, Rajesh stands as an icon for aspiring kabaddi players across Haryana.</p>
                    </div>
                    <img src={rajesh} alt="Rajesh" />
                </div>
                <div className='about-us-bottom-content mohit'>
                    <div className='about-us-bottom-content-description'>
                        <h4>Mohit Chillar</h4>
                        <p>One of India's top defenders with years of national and international experience. Feared for his powerful tackles and fearless mindset, Mohit brings unmatched energy and inspiration to the league.</p>
                    </div>
                    <img src={mohit} alt="Mohit" />
                </div>
            </div>
        </div>
    );
}

export default AboutUs;