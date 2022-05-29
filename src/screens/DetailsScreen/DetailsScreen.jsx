/* eslint-disable multiline-ternary */
import React, { useEffect, useState } from 'react'
import { useMatch, useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { setPathAndUrl } from 'redux/actions/routesActions'
import {
  getDetailsCredits,
  getDetailsImages,
  getDetailsOverview,
  getDetailsReviews,
  getDetailsVideos
} from 'redux/actions/detailsActions'

import Crew from 'components/Crew'
import Media from 'components/Media'
import Overview from 'components/Overview'
import Rating from 'components/Rating'
import Reviews from 'components/Reviews'
import Spinner from 'components/Spinner'
import { Tabs } from 'components/Tabs'

import 'screens/DetailsScreen/DetailsScreen.scss'

const DetailsScreen = () => {
  const { id } = useParams()
  const matchDetailsRoute = useMatch('/:id/:name/details')
  const dispatch = useDispatch()
  const {
    backdrop_path,
    genres,
    loading,
    poster_path,
    release_date,
    success: detailsSuccess,
    title,
    vote_average,
    vote_count
  } = useSelector((state) => state.details)

  const [initialLoading, setInitialLoading] = useState(true)

  /* Setup path */
  useEffect(() => {
    const path = matchDetailsRoute.pattern.path
    const url = matchDetailsRoute.pathname
    dispatch(setPathAndUrl({ path, url }))
  }, [matchDetailsRoute.pattern.path, matchDetailsRoute.pathname])

  /* Fetch details data from API */
  useEffect(() => {
    dispatch(getDetailsOverview(id))
    dispatch(getDetailsCredits(id))
    dispatch(getDetailsImages(id))
    dispatch(getDetailsVideos(id))
    dispatch(getDetailsReviews(id))
  }, [dispatch, id])

  /* Setup initial delay */
  useEffect(() => {
    setInitialLoading(true)
    const timer = setTimeout(() => setInitialLoading(false), 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading || initialLoading ? (
        <Spinner />
      ) : (
        detailsSuccess && (
          <div className="movie-container">
            <div
              className="movie-bg"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`
              }}
            />

            <div className="movie-overlay" />

            <div className="movie-details">
              <div className="movie-image">
                <img alt="" src={`https://image.tmdb.org/t/p/original${poster_path}`} />
              </div>

              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {title} <span>{release_date}</span>
                  </div>

                  <div className="movie-genres">
                    <ul className="genres">
                      {genres.map(({ id, name }) => (
                        <li key={id}>{name}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rating">
                    <Rating className="rating-stars" rating={vote_average} stars={10} />
                    &nbsp;
                    <span>{vote_average}</span>
                    <p>({vote_count} reviews)</p>
                  </div>

                  <Tabs>
                    <div label="Overview">
                      <Overview />
                    </div>
                    <div label="Crew">
                      <Crew />
                    </div>
                    <div label="Media">
                      <Media />
                    </div>
                    <div label="Reviews">
                      <Reviews />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  )
}

export default DetailsScreen
