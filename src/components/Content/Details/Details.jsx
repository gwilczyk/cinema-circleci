/* eslint-disable multiline-ternary */
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import {
  getDetailsCredits,
  getDetailsImages,
  getDetailsOverview,
  getDetailsReviews,
  getDetailsVideos
} from 'redux/actions/detailsActions'

import Crew from 'components/Content/Crew'
import Media from 'components/Content/Media'
import Overview from 'components/Content/Overview'
import Rating from 'components/Content/Rating'
import Reviews from 'components/Content/Reviews'
import Spinner from 'components/Content/Spinner'
import Tabs from 'components/Content/Tabs'

import 'components/Content/Details/Details.scss'

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const {
    backdrop_path,
    genres,
    loading,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count
  } = useSelector((state) => state.details)

  useEffect(() => {
    dispatch(getDetailsOverview(id))
    dispatch(getDetailsCredits(id))
    dispatch(getDetailsImages(id))
    dispatch(getDetailsVideos(id))
    dispatch(getDetailsReviews(id))
  }, [dispatch, id])

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        vote_average && (
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

export default Details
