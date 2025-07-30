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

function Home() {
  return (
    <div>
        <Slider />

        <MatchesCards />

        <TeamsContainer />

        <TeamStandingTable />

        <Blogs />

        <Videos />

        <SocialMediaPosts />



        {/* Ground Banner */}
        <div className="img-container" style={{width: "100%", marginTop: '50px'}}>
          <img src={GroundImage} alt="GroundImage" style={{width: '100%'}} />
        </div>


        <Enquiries />

        <Sponsers />

    </div>
  )
}

export default Home