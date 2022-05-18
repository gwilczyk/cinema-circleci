import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from 'react-redux'

import LazyImage from 'components/LazyImage/LazyImage'
import Rating from 'components/Content/Rating'

import './Grid.scss'

const Grid = () => {
  const { movies } = useSelector((state) => state.movieList)

  return (
    <>
      <div className="grid">
        {movies.map((movie) => (
          <div key={uuidv4()}>
            <LazyImage
              alt="placeholder"
              className="grid-cell"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <a href="#">Read More</a>
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
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid
