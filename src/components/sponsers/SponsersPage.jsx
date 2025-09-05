import React from 'react'
import '../../assets/styles/sponsers.css'

import sponser1 from '../../assets/images/sponsers/nxt_sports.png'
import sponser2 from '../../assets/images/sponsers/result_guru.png'
import sponser3 from '../../assets/images/sponsers/Niraveda.png'
import associateSponser from '../../assets/images/sponsers/associate_partner.png'
import { Link, } from 'react-router-dom'
import banner from '../../assets/images/team-page/TeamsPage.png'


function SponsersPage() {

  return (
    <div className="sponser-page">
        <div className="page-team-header" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container">
                <div className="content">
                    <h2>Our Partners</h2>
                </div>
            </div>
        </div>
        <div className="sponsers-container">

        {/* Official Partners Section */}
        <div className="sponsor-section">
            <div className="sponsor-logos-grid">
            {/* First Row */}
            <Link to={'https://www.nxtsports.in'} target='_blank' className="sponsor-item">
                <p className="partner-label">MANAGING PARTNERS</p>
                <div className="sponsor-logo">
                <img src={sponser1} alt="Nxt Sports" />
                </div>
            </Link>
            <Link to={'https://www.resultguru.in'} target='_blank' className="sponsor-item">
                <p className="partner-label">EDUCATION PARTNER</p>
                <div className="sponsor-logo">
                <img src={sponser2} alt="Result Guru" />
                </div>
            </Link>
            <Link to={'https://www.niraveda.com'} target='_blank' className="sponsor-item">
                <p className="partner-label">AYURVEDIC PARTNER</p>
                <div className="sponsor-logo">
                <img src={sponser3} alt="Nirveda" />
                </div>
            </Link>
            </div>
        </div>

        <Link to={'https://www.amateurkabaddiassociationharyana.com'} target='_blank' className="sponsor-section">
            <p className="partner-label">IN ASSOCIATION WITH</p>
            <div className="sponsor-logos-row">
            <div className="sponsor-logo">
                <img src={associateSponser} alt="Armature Kabaddi League Haryana" />
            </div>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default SponsersPage