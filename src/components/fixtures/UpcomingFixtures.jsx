import React from 'react'
import logo1 from '../../assets/images/Home/logos_table/karnal_kings.png'
import logo2 from '../../assets/images/Home/logos_table/hisar_heros.png'
import logo3 from '../../assets/images/Home/logos_table/bhiwani_bulls.png'
import logo4 from '../../assets/images/Home/logos_table/faridabad_fighters.png'
import logo5 from '../../assets/images/Home/logos_table/panipat_panther.png'
import logo6 from '../../assets/images/Home/logos_table/gurgaon_gurus.png'
import FixtureCard from './FixtureCard'

function UpcomingFixtures() {
  return (
    <section className='fixtures-section'>

      <div className='fixture-card-section'>

        <div className="container">

          <div className="fitures-container">
            <div className="date">Septembar 31, 2025</div>

            <div className="fixtures-cards-container">
              <FixtureCard
                day="Day 18"
                match="Match 21"
                time="7:00 PM onwards"
                stadium="The Nahar Singh Stadium, Faridabad"
                team1Logo={logo1}
                team1Name="Karnal Kings"
                team2Logo={logo2}
                team2Name="Hissar Heroes"
                score1={0}
                score2={0}
                status="Full Time"
              />
            </div>
          </div>

        </div>

      </div>

      <div className='fixture-card-section'>

        <div className="container">

          <div className="fitures-container">
            <div className="date">December 27, 2024</div>

            <div className="fixtures-cards-container">
              <FixtureCard
                day="Day 18"
                match="Match 21"
                time="7:00 PM onwards"
                stadium="The Nahar Singh Stadium, Faridabad"
                team1Logo={logo3}
                team1Name="Bhiwani Bulls"
                team2Logo={logo4}
                team2Name="Faridabad Fighters"
                score1={0}
                score2={0}
                status="Full Time"
              />

              <FixtureCard
                day="Day 18"
                match="Match 21"
                time="7:00 PM onwards"
                stadium="The Nahar Singh Stadium, Faridabad"
                team1Logo={logo5}
                team1Name="Panipat Panthers"
                team2Logo={logo6}
                team2Name="Gurgaon Gurus"
                score1={0}
                score2={0}
                status="Full Time"
              />
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default UpcomingFixtures