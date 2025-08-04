import React from 'react'
import '../../assets/styles/sponsers.css'

function Sponsers() {
  return (
    <div className="sponsers-container">
      <h2>OUR PARTNERS</h2>

      {/* Title Sponsor Section */}
      <div className="sponsor-section">
        <h3 className="section-title">TITLE SPONSOR</h3>
        <div className="sponsor-logo">
          <img src="" alt="GMR" />
        </div>
      </div>

      {/* Powered By Section */}
      <div className="sponsor-section">
        <h3 className="section-title">POWERED BY</h3>
        <div className="sponsor-logo">
          <img src="" alt="HSBC" />
        </div>
      </div>

      {/* Associate Sponsors Section */}
      <div className="sponsor-section">
        <h3 className="section-title">ASSOCIATE SPONSORS</h3>
        <div className="sponsor-logos-row">
          <div className="sponsor-logo">
            <img src="" alt="ENCALM" />
          </div>
          <div className="sponsor-logo">
            <img src="" alt="MEGAWIDE" />
          </div>
          <div className="sponsor-logo">
            <img src="" alt="Waisl" />
          </div>
        </div>
      </div>

      {/* Official Partners Section */}
      <div className="sponsor-section">
        <h3 className="section-title">OFFICIAL PARTNERS</h3>
        <div className="sponsor-logos-grid">
          {/* First Row */}
          <div className="sponsor-logo">
            <img src="" alt="Capgemini" />
            <p className="partner-label">TRANSFORMATION PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="Hero FINCORP" />
          </div>
          <div className="sponsor-logo">
            <img src="" alt="Bisleri" />
            <p className="partner-label">HYDRATION PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="JSW Cement" />
          </div>
          <div className="sponsor-logo">
            <img src="" alt="Amul" />
          </div>

          {/* Second Row */}
          <div className="sponsor-logo">
            <img src="" alt="DREAM11" />
            <p className="partner-label">FANTASY SPORTS PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="Pushpak" />
            <p className="partner-label">EQUIPMENT LEASING PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="WINTEX EXPORTS" />
          </div>
          <div className="sponsor-logo">
            <img src="" alt="NANAVATI MAX" />
            <p className="partner-label">MEDICAL PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="CAPITAL" />
            <p className="partner-label">OUTDOOR MEDIA PARTNER</p>
          </div>
          <div className="sponsor-logo">
            <img src="" alt="MIRCHI" />
            <p className="partner-label">RADIO PARTNER</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsers