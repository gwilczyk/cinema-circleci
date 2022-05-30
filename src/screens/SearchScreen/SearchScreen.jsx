/* eslint-disable multiline-ternary */
import React, { Fragment, useEffect } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { useDispatch, useSelector } from 'react-redux'
import { setPathAndUrl } from 'redux/actions/routesActions'

import LazyImage from 'components/LazyImage/LazyImage'
import Rating from 'components/Rating'

import { formatMovieTitle } from 'utils'

import 'components/Grid/Grid.scss'
import 'screens/SearchScreen/SearchScreen.scss'

const SearchScreen = () => {
  const matchSearchRoute = useMatch('/search')
  const dispatch = useDispatch()
  const { query, results: searchResults } = useSelector((state) => state.search)

  useEffect(() => {
    const path = matchSearchRoute.pattern.path
    const url = matchSearchRoute.pathname
    dispatch(setPathAndUrl({ path, url }))
  })

  return (
    <div className="search-keyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword:</span>{' '}
        <span className="grid-text2">{query}</span>
      </div>

      {searchResults.length ? (
        <div className="grid">
          {searchResults.map((movie) => (
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
      ) : (
        <p>No movies found</p>
      )}
    </div>
  )
}

export default SearchScreen
