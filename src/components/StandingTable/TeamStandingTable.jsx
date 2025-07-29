import React from 'react';
import './TeamStandingTable.css';
import image1 from '../../assets/images/Home/Table_logo_1.png'
import image2 from '../../assets/images/Home/Table_logo_2.png'

const teams = [
  {
    name: 'SONIPAT STARS',
    image: image1
  },
  {
    name: 'HISAR HEROES',
    image: image2
  },
  {
    name: 'SONIPAT STARS',
    image: image1
  },
  {
    name: 'HISAR HEROES',
    image: image2
  },
  {
    name: 'SONIPAT STARS',
    image: image1
  },
  {
    name: 'HISAR HEROES',
    image: image2
  },
  {
    name: 'SONIPAT STARS',
    image: image1
  },
  {
    name: 'HISAR HEROES',
    image: image2
  }
];


const TeamStandingTable = () => {
  return (
    <div className="leaderboard-container">
        <div className="container">
            <h2>POINTS TABLE</h2>
            <table className="leaderboard-table table-striped">
                <thead>
                <tr>
                    <th>POS</th>
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
                    <td className="trhighlight">0</td>
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
  );
};

export default TeamStandingTable;
