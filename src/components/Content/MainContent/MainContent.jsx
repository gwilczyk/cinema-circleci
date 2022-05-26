import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialMovies, fetchNextMovies } from 'redux/actions/movieActions'
import { MOVIE_LOAD_PREV } from 'redux/actions/movieTypes'

import Grid from 'components/Content/Grid'
import Paginate from 'components/Content/Paginate'
import SlideShow from 'components/Content/SlideShow'

import { fisherYatesShuffle, formatHeaderItems } from 'utils'

import 'components/Content/MainContent/MainContent.scss'

const MainContent = () => {
  const dispatch = useDispatch()
  const { movies, movieType, page, pages } = useSelector((state) => state.movieList)
  const [images, setImages] = useState([])

  const paginate = (direction) => {
    if (direction === 'prev') {
      page > 1
        ? dispatch({ type: MOVIE_LOAD_PREV, payload: { page: page - 1 } })
        : dispatch(fetchInitialMovies(movieType))
    } else {
      page < pages
        ? dispatch(fetchNextMovies(movieType, page + 1))
        : dispatch(fetchNextMovies(movieType, pages))
    }
  }

  /* Shuffle movies and selects the 5 first of them */
  useEffect(() => {
    const firstMovies = movies && movies.length && fisherYatesShuffle(movies).slice(0, 5)

    if (firstMovies.length) {
      const IMAGES = []
      for (let i = 0; i < 5; i++) {
        IMAGES.push({
          rating: firstMovies[i].vote_average,
          title: firstMovies[i].original_title,
          url: `https://image.tmdb.org/t/p/original/${firstMovies[i].backdrop_path}`
        })
      }

      setImages(IMAGES)
    }
  }, [movies])

  return (
    <div className="main-content">
      <SlideShow images={images} />

      <div className="grid-movie-title">
        <div className="movie-type">{formatHeaderItems(movieType)}</div>

        <div className="paginate">
          <Paginate page={page} paginate={paginate} pages={pages} />
        </div>
      </div>

      <Grid />
    </div>
  )
}

export default MainContent
