import React from 'react'
import msgImg from '../../assets/images/Home/Email.svg'
import './enquiry.css'

function Enquiries() {
  return (
    <div className='enquries-container'>
        <div className="container">
            <div className="section-1">
                <img src={msgImg} alt="email" />
                <div className="text-container">
                    <h2>For Enquires</h2>
                    <p>Reach out to</p>
                </div>
            </div>
            <div className="section-2">
                <a href="#">
                    <button >Contactus@kcl.com</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Enquiries