import React from 'react'
import image1 from '../assets/images/Home/logos_table/sonipat_stars.png'
import image2 from '../assets/images/Home/logos_table/rotak_royals.png'
import image3 from '../assets/images/Home/logos_table/hisar_heros.png'
import image4 from '../assets/images/Home/logos_table/panipat_panther.png'
import image5 from '../assets/images/Home/logos_table/faridabad_fighters.png'
import image6 from '../assets/images/Home/logos_table/bhiwani_bulls.png'
import image7 from '../assets/images/Home/logos_table/karnal_kings.png'
import image8 from '../assets/images/Home/logos_table/gurgaon_gurus.png'
import banner from '../assets/images/team-page/TeamsPage.png'

import arrow from '../assets/images/Home/Arrow.svg'

function Standings() {

  const teams = [
    {
      name: 'SONIPAT STARS',
      image: image1
    },
    {
      name: 'ROHTAK ROYALS',
      image: image2
    },
    {
      name: 'HISAR HEROES',
      image: image3
    },

    {
      name: 'FARIDABAD FIGHTERS',
      image: image5
    },
    {
      name: 'PANIPAT PANTHERS',
      image: image4
    },
    {
      name: 'BHIWANI BULLS',
      image: image6
    },
    {
      name: 'KARNAL KINGS',
      image: image7
    },
    {
      name: 'GURGAON GURU',
      image: image8
    }
  ];

  return (
    <div className='teamPage'>
      <div className="page-team-header" style={{ backgroundImage: `url(${banner})` }}>
        <div className="container">
          <div className="content">
            <h2>Standings</h2>
          </div>
        </div>
      </div>


      <div className="container">

        <table className="leaderboard-table table-striped" style={{ margin: "50px 0" }}>
          <thead>
            <tr>
              <th className="text-center">POS</th>
              <th>TEAMS</th>
              <th>P</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>SCORE DIFF</th>
              <th>PTS</th>
              <th>FORM</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="trhighlight team-name">
                  <img src={team.image} alt="" />
                  {team.name}
                </td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td><div className="form-icons">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="form-icon trhighlight W">W</span>
                  ))}
                  <span className="form-icon trhighlight L">L</span>
                </div></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>




    </div>
  )
}

export default Standings