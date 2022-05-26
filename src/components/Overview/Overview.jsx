/* eslint-disable multiline-ternary */
import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

import Spinner from 'components/Spinner'

import { numberFormatter } from 'utils'

import 'components/Overview/Overview.scss'

const Overview = () => {
  const {
    budget,
    cast,
    loading,
    overview,
    production_companies,
    release_date,
    revenue,
    runtime,
    spoken_languages,
    status,
    tagline
  } = useSelector((state) => state.details)
  const [items, setItems] = useState([])

  const DETAILITEMS = [
    {
      id: 0,
      name: 'Tagline',
      value: tagline
    },
    {
      id: 1,
      name: 'Budget',
      value: `${numberFormatter(budget, 1)}`
    },
    {
      id: 2,
      name: 'Revenue',
      value: `${numberFormatter(revenue, 1)}`
    },
    {
      id: 3,
      name: 'Status',
      value: status
    },
    {
      id: 4,
      name: 'Release Date',
      value: release_date
    },
    {
      id: 5,
      name: 'Run Time',
      value: `${runtime} min`
    }
  ]

  useEffect(() => setItems(DETAILITEMS), [])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overview">
          <div className="overview-column-1">
            <div className="description">{overview}</div>

            <div className="cast">
              <div className="cast-title">Cast</div>

              <table>
                <tbody>
                  {cast.map(({ character, name, profile_path }) => (
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
                      <td>{character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="overview-column-2">
            <div className="overview-detail">
              <h6>Production Companies</h6>
              {production_companies.map(({ logo_path, name }) => (
                <div className="product-company" key={uuidv4()}>
                  <img
                    alt=""
                    src={
                      logo_path
                        ? `https://image.tmdb.org/t/p/original${logo_path}`
                        : 'https://place-hold.it/30x30/abb7c4/abb7c4'
                    }
                  />
                  <span>{name}</span>
                </div>
              ))}
            </div>

            <div className="overview-detail">
              <h6>Language(s)</h6>

              {spoken_languages.map(({ name }) => (
                <p key={uuidv4()}>
                  <Link to="#">{name}</Link>
                </p>
              ))}
            </div>

            {items.map((data) => (
              <div className="overview-detail" key={data.id}>
                <h6>{data.name}</h6>

                <p>
                  <a href="!#">{data.value}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Overview
