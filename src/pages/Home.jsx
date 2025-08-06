import React from 'react'
import Slider from '../components/slider/Slider'
import MatchesCardsSlider from '../components/MatchesCardsSlider'
import Sponsers from '../components/sponsers/Sponsers'
import Blogs from '../components/blogs/Blogs'
import TeamsContainer from '../components/TeamsContainer'
import TeamStandingTable from '../components/StandingTable/TeamStandingTable'

import GroundImage from '../assets/images/Home/Stadium.jpg'
import Enquiries from '../components/Enquiries/Enquiries'
import MatchesCards from '../components/matches/MatchesCards'
import SocialMediaPosts from '../components/socialMediaPosts/SocialMediaPosts'
import Videos from '../components/videos/Videos'
import HomeBannerSlider from '../components/HomeBannerSlider'
import HeroVideo from '../components/hero_video/HeroVideo'

function Home() {
  return (
    <div style={{ marginBottom: '50px' }}>

      <HeroVideo />
      {/* <Slider /> */}

      {/* <HomeBannerSlider /> */}

      <MatchesCards />

      <TeamsContainer />

      {/* <TeamStandingTable /> */}
      <SocialMediaPosts />

      <Blogs />

      <Videos />




      {/* Ground Banner */}
      {/* <div className="img-container" style={{width: "100%"}}>
          <img src={GroundImage} alt="GroundImage" style={{width: '100%'}} />
        </div> */}


      {/* <Enquiries /> */}


    </div>
  )
}

export default Home