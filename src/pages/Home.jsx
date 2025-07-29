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

function Home() {
  return (
    <div>
        <Slider />

        {/* Blogs */}

        <Blogs />

        {/* Teams */}
        <TeamsContainer />

        <MatchesCards />

        {/* Ground Banner */}
        <div className="img-container" style={{width: "100%", marginTop: '50px'}}>
          <img src={GroundImage} alt="GroundImage" style={{width: '100%'}} />
        </div>

        {/* Teams */}
        <TeamStandingTable />


        {/* Enquiries */}
        <Enquiries />


        {/* Sponsers Logos */}
        {/* <Sponsers /> */}

    </div>
  )
}

export default Home