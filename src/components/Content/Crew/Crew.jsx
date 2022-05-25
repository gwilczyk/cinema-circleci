import React from 'react'

import 'components/Content/Crew/Crew.scss'

const Crew = () => (
  <div className="cast">
    <div className="cast-title">Crew</div>

    <table>
      <thead>
        <tr>
          <th></th>
          <th></th>
          <th className="head">Department</th>
          <th className="head">Job</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src="http://placehold.it/54x81" alt="" />
          </td>
          <td>Alan Silvestri</td>
          <td>Sound</td>
          <td>Original Music Composer</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default Crew
