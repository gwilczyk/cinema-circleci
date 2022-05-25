import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'

import LazyImage from 'components/Content/LazyImage/LazyImage'
import Rating from 'components/Content/Rating'

import { formatMovieTitle } from 'utils'

import 'components/Content/Grid/Grid.scss'

const Grid = () => {
  const { movies } = useSelector((state) => state.movieList)

  return (
    <>
      <div className="grid">
        {movies.map((movie) => (
          <Fragment key={uuidv4()}>
            {movie.poster_path && (
              <LazyImage
                alt="placeholder"
                className="grid-cell"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">
                    <Link to={`/${movie.id}/${formatMovieTitle(movie.title)}/details`}>
                      Read More
                    </Link>
                  </button>
                </div>

                <div className="grid-detail">
                  <span className="grid-detail-title">{movie.original_title}</span>

                  <div className="grid-detail-rating">
                    <Rating rating={movie.vote_average} stars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-detail-vote-average">{movie.vote_average}</div>
                  </div>
                </div>
              </LazyImage>
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default Grid
