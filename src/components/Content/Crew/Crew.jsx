import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useSelector } from 'react-redux'

import 'components/Content/Crew/Crew.scss'

const Crew = () => {
  const { crew } = useSelector((state) => state.details)

  return (
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
          {crew.map(({ department, job, name, profile_path }) => (
            <tr key={uuidv4()}>
              <td>
                <img
                  alt=""
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : 'https://place-hold.it/54x81/abb7c4/abb7c4'
                  }
                />
              </td>
              <td>{name}</td>
              <td>{department}</td>
              <td>{job}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Crew
