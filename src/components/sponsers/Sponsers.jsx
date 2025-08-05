import React from 'react'
import '../../assets/styles/sponsers.css'

import sponser1 from '../../assets/images/sponsers/nxt_sports.png'
import sponser2 from '../../assets/images/sponsers/result_guru.png'
import sponser3 from '../../assets/images/sponsers/Niraveda.png'
import associateSponser from '../../assets/images/sponsers/associate_partner.png'
import { useLocation } from 'react-router-dom'

function Sponsers() {

  const location = useLocation();


  return (
    <div className="sponsers-container">
      <h2>OUR PARTNERS</h2>

      {/* Official Partners Section */}
      <div className="sponsor-section">
        <div className="sponsor-logos-grid">
          {/* First Row */}
          <div className="sponsor-item">
            <p className="partner-label">MANAGING PARTNERS</p>
            <div className="sponsor-logo">
              <img src={sponser1} alt="Nxt Sports" />
            </div>
          </div>
          <div className="sponsor-item">
            <p className="partner-label">EDUCATION PARTNER</p>
            <div className="sponsor-logo">
              <img src={sponser2} alt="Result Guru" />
            </div>
          </div>
          <div className="sponsor-item">
            <p className="partner-label">AYURVEDIC PARTNER</p>
            <div className="sponsor-logo">
              <img src={sponser3} alt="Nirveda" />
            </div>
          </div>
        </div>
      </div>

      <div className="sponsor-section">
        <h3 className="section-title">IN ASSOCIATE WITH</h3>
        <div className="sponsor-logos-row">
          <div className="sponsor-logo">
            <img src={associateSponser} alt="Armature Kabaddi League Haryana" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsers