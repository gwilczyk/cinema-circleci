import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialMovies, fetchMoreMoviesByScroll } from 'redux/actions/movieActions'

import MainContent from 'components/Content/MainContent'
import Spinner from 'components/Content/Spinner'

import './Main.scss'

const Main = () => {
  const { loading, movieType, page, pages } = useSelector((state) => state.movieList)
  const dispatch = useDispatch()

  const [initialLoading, setInitialLoading] = useState(false)

  const mainRef = useRef(null)
  const bottomLineRef = useRef(null)

  /* Fetching new movies when scrolling */
  const handleScroll = () => {
    /*
      Adding navbar height (55px) + one grid row height (460px)
    */
    const containerHeight = mainRef.current.getBoundingClientRect().height + 55 + 460
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect()

    if (!loading && bottomLineTop <= containerHeight && page < pages) {
      dispatch(fetchMoreMoviesByScroll(movieType, page + 1))
    }
  }

  /* Setting initial delay */
  useEffect(() => {
    setInitialLoading(true)
    const timer = setTimeout(() => setInitialLoading(false), 1500)

    return () => clearTimeout(timer)
  }, [])

  /* Fetching initial movies at each category ('now_playing', 'popular', etc.) changing. */
  useEffect(() => {
    if (!loading && !initialLoading) {
      dispatch(fetchInitialMovies(movieType))
    }
  }, [movieType])

  return (
    <div className="main" onScroll={handleScroll} ref={mainRef}>
      {initialLoading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef} />
    </div>
  )
}

export default Main
