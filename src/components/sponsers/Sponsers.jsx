import React from 'react'
import sponser1 from '../../assets/images/Home/sponser-1.png'
import sponser2 from '../../assets/images/Home/sponser-2.png'
import sponser3 from '../../assets/images/Home/sponser-3.png'
import sponser4 from '../../assets/images/Home/sponser-4.png'
import sponser5 from '../../assets/images/Home/sponser-5.webp'
import sponser6 from '../../assets/images/Home/sponser-6.png'
import sponser7 from '../../assets/images/Home/sponser-7.webp'
import sponser8 from '../../assets/images/Home/sponser-8.webp'
import sponser9 from '../../assets/images/Home/sponser-9.webp'
import '../../assets/styles/sponsers.css'

function Sponsers() {
  return (
    <div className='container'>

        <div className="sponsers-container">

            <div className="sponser-title">
                <div className="background-line"></div>
                <h2>Principal Sponsers</h2>
            </div>

            <div className="sponsers-logo">
                <img src={sponser1} alt="sponser1" />
                <img src={sponser2} alt="sponser1" />
                <img src={sponser3} alt="sponser1" />
            </div>
        </div>

        <div className="sponsers-container">

            <div className="sponser-title">
                <div className="background-line"></div>
                <h2>Associate Sponsers</h2>
            </div>

            <div className="sponsers-logo">
                <img src={sponser4} alt="sponser1" />
                <img src={sponser5} alt="sponser1" />
                <img src={sponser6} alt="sponser1" />
            </div>
        </div>

        <div className="sponsers-container">

            <div className="sponser-title">
                <div className="background-line"></div>
                <h2>Official Sponsers</h2>
            </div>

            <div className="sponsers-logo">
                <img src={sponser7} alt="sponser1" />
                <img src={sponser8} alt="sponser1" />
                <img src={sponser9} alt="sponser1" />
                <img src={sponser5} alt="sponser1" />
                

            </div>
        </div>

    </div>
  )
}

export default Sponsers