import '../assets/styles/about.css'
import header1 from '../assets/images/about/about_us_1.png'
import header2 from '../assets/images/about/about_us_2.png'
import founder1 from '../assets/images/about/founder.png'

function AboutUs() {
    return (
        <div className="about-us-page">
            <div className="about-us-container">
                <div className='about-us-content'>
                    <h2>Kabaddi <br />Champions League Haryana</h2>
                    <p>In Haryana, kabaddi is more than a game — it's an emotion. It lives in every gaon, is played in every akhada, and is loved by all — from kids to desi taus. Every village has a team, every mela a match, and every street echoes with <span>“kabaddi… kabaddi…”</span> <br /><br />Kabaddi Champions League Haryana is built on this passion — to give village champions a professional platform. Now, the same raw talent from our gaon will be seen on TV screens and big stadiums, playing for the world to watch.This isn't just a league — It's Haryana's kabaddi dream, going from <span>gaon to glory.</span></p>
                </div>
                <img className='about-us-bg' src={header1} />
            </div>
            <div className='about-us-container'>
                <div className='about-us-founder-container'>
                    <div className='about-us-founder'>
                        <div className='about-us-founder-left'>
                            <h4>Rajesh Narwal</h4>
                            <h5>All-Rounder</h5>
                        </div>
                        <img className='about-us-founder-image' src={founder1} alt="Rajesh Narwal and Mohit Chillar" />
                        <div className='about-us-founder-right'>
                            <h4>Mohit Chillar</h4>
                            <h5>Defender</h5>
                        </div>
                    </div>
                    <div className='about-us-founder-content'>
                        <p>A renowned all-rounder who has represented India at the international level. Known for his game sense, strength, and gaon se nikla dum, Rajesh stands as an icon for aspiring kabaddi players across Haryana.</p>
                        <div className='about-us-founder-content-line'></div>
                        <p>One of India's top defenders with years of national and international experience. Feared for his powerful tackles and fearless mindset, Mohit brings unmatched energy and inspiration to the league.</p>
                    </div>
                </div>
                <img className='about-us-bg' src={header2} />
            </div>
        </div>
    );
}

export default AboutUs;