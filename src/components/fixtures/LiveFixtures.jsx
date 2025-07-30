import React from 'react'

import logo1 from '../../assets/images/fixtures/logo_2.png'
import logo2 from '../../assets/images/fixtures/logo_1.png'

import arrow from '../../assets/images/Home/Arrow.svg'

function LiveFixtures() {
  return (

    <section className='fixtures-section'>

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
                        <img src={logo1} alt={"logo1"} />
                        <p className='fs-18 teams-name'>Karnal <br /> Kings</p>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
                        <p style={{marginTop: '10px'}} className='full-time'>Full Time</p>
                        <div className="fitures-score-section">
                        <div className="fitures-score">
                            <span>{25}</span> - <span>{30}</span>
                        </div>
                        </div>
                    </div>

                    <div className="fitures-team">
                        <p className='fs-18 teams-name'>Panipat <br /> Panthers</p>
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
                        <img src={logo1} alt={"logo1"} />
                        <p className='fs-18 teams-name'>Karnal <br /> Kings</p>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
                        <p style={{marginTop: '10px'}} className='full-time'>Full Time</p>
                        <div className="fitures-score-section">
                        <div className="fitures-score">
                            <span>{25}</span> - <span>{30}</span>
                        </div>
                        </div>
                    </div>

                    <div className="fitures-team">
                        <p className='fs-18 teams-name'>Panipat <br /> Panthers</p>
                        <img src={logo2} alt={"logo1"} />
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
                        <img src={logo1} alt={"logo1"} />
                        <p className='fs-18 teams-name'>Karnal <br /> Kings</p>
                    </div>

                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '5px'}}>
                        <p style={{marginTop: '10px'}} className='full-time'>Full Time</p>
                        <div className="fitures-score-section">
                        <div className="fitures-score">
                            <span>{25}</span> - <span>{30}</span>
                        </div>
                        </div>
                    </div>

                    <div className="fitures-team">
                        <p className='fs-18 teams-name'>Panipat <br /> Panthers</p>
                        <img src={logo2} alt={"logo1"} />
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

export default LiveFixtures