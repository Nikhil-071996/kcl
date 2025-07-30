import React from 'react'
import sponser1 from '../../assets/images/sponsers/NXt.png'
import sponser2 from '../../assets/images/sponsers/Result.png'
import sponser3 from '../../assets/images/sponsers/Nirveda.png'
import sponser4 from '../../assets/images/sponsers/Kabaddi.png'
import '../../assets/styles/sponsers.css'

function Sponsers() {
  return (

    <div className="sponsers-container">
        <div className='container'>
            <img src={sponser1} alt="sponser1" />
            <img src={sponser2} alt="sponser1" />
            <img src={sponser3} alt="sponser1" />
        </div>
        <div className="container" style={{marginTop: '30px'}}>
            <img src={sponser4} alt="sponser1" />
        </div>

    </div>
  )
}

export default Sponsers