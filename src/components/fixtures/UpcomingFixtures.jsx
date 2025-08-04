import React from 'react'
import logo1 from '../../assets/images/Home/logos_table/karnal_kings.png'
import logo2 from '../../assets/images/Home/logos_table/hisar_heros.png'
import logo3 from '../../assets/images/Home/logos_table/bhiwani_bulls.png'
import logo4 from '../../assets/images/Home/logos_table/faridabad_fighters.png'
import logo5 from '../../assets/images/Home/logos_table/panipat_panther.png'
import logo6 from '../../assets/images/Home/logos_table/gurgaon_gurus.png'

import arrow from '../../assets/images/Home/Arrow.svg'


function UpcomingFixtures() {
  return (
    <section className='fixtures-section'>

      <div className='fixture-card-section'>

        <div className="container">

          <div className="fitures-container">
            <div className="date">Septembar 31, 2025</div>

            <div className="fixtures-cards-container">
              {/* Card 1 */}
              <div className="fixture-card">
                <div className="section-1">
                  <h3 className='fs-27'>Day 18, Match 21</h3>
                  <p className='fs-13 margin-para'>7:00 PM onwards</p>
                  <p className='fs-13'>The Nahar Singh Stadium, Faridabad</p>
                </div>
                <div className="section-2">
                  <div className="fitures-match-body">
                    <div className="fitures-team">
                      <img src={logo1} alt={"logo1"} />
                      <p className='fs-18 teams-name'>Karnal <br /> Kings</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px' }}>
                      <p style={{ marginTop: '10px' }} className='full-time'>Full Time</p>
                      <div className="fitures-score-section">
                        <div className="fitures-score">
                          <span>{0}</span> - <span>{0}</span>
                        </div>
                      </div>
                    </div>

                    <div className="fitures-team">
                      <p className='fs-18 teams-name'>Hissar <br /> Heroes</p>
                      <img src={logo2} alt={"logo1"} />
                    </div>
                    <img src={arrow} alt="arrow" className='arrow-icon' />
                  </div>
                </div>
              </div>
              {/* Card 1 */}
            </div>
          </div>

        </div>

      </div>

      <div className='fixture-card-section'>

        <div className="container">

          <div className="fitures-container">
            <div className="date">December 27, 2024</div>

            <div className="fixtures-cards-container">
              {/* Card 1 */}
              <div className="fixture-card">
                <div className="section-1">
                  <h3 className='fs-27'>Day 18, Match 21</h3>
                  <p className='fs-13 margin-para'>7:00 PM onwards</p>
                  <p className='fs-13'>The Nahar Singh Stadium, Faridabad</p>
                </div>
                <div className="section-2">
                  <div className="fitures-match-body">
                    <div className="fitures-team">
                      <img src={logo3} alt={"logo1"} />
                      <p className='fs-18 teams-name'>Bhiwani  <br /> Bulls</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px' }}>
                      <p style={{ marginTop: '10px' }} className='full-time'>Full Time</p>
                      <div className="fitures-score-section">
                        <div className="fitures-score">
                          <span>{0}</span> - <span>{0}</span>
                        </div>
                      </div>
                    </div>

                    <div className="fitures-team">
                      <p className='fs-18 teams-name'>Faridabad  <br /> Fighters</p>
                      <img src={logo4} alt={"logo1"} />
                    </div>
                    <img src={arrow} alt="arrow" className='arrow-icon' />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="fixture-card">
                <div className="section-1">
                  <h3 className='fs-27'>Day 18, Match 21</h3>
                  <p className='fs-13 margin-para'>7:00 PM onwards</p>
                  <p className='fs-13'>The Nahar Singh Stadium, Faridabad</p>
                </div>
                <div className="section-2">
                  <div className="fitures-match-body">
                    <div className="fitures-team">
                      <img src={logo5} alt={"logo1"} />
                      <p className='fs-18 teams-name'>Panipat  <br /> Panthers</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px' }}>
                      <p style={{ marginTop: '10px' }} className='full-time'>Full Time</p>
                      <div className="fitures-score-section">
                        <div className="fitures-score">
                          <span>{0}</span> - <span>{0}</span>
                        </div>
                      </div>
                    </div>

                    <div className="fitures-team">
                      <p className='fs-18 teams-name'>Gurgaon  <br /> Gurus</p>
                      <img src={logo6} alt={"logo1"} />
                    </div>
                    <img src={arrow} alt="arrow" className='arrow-icon' />
                  </div>
                </div>
              </div>
            </div>


          </div>




        </div>

      </div>


    </section>
  )
}

export default UpcomingFixtures