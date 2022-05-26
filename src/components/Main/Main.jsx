import React, { useEffect, useRef, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialMovies, fetchMoreMoviesByScroll } from 'redux/actions/movieActions'
import { DETAILS_RESET } from 'redux/actions/detailsTypes'

import MainContent from 'components/Content/MainContent'
import Search from 'components/Content/Search'
import Spinner from 'components/Content/Spinner'

import 'components/Main/Main.scss'

const Main = () => {
  const { loading, movieType, page, pages } = useSelector((state) => state.movieList)
  const { success: detailsSuccess } = useSelector((state) => state.details)
  const { results } = useSelector((state) => state.search)
  const dispatch = useDispatch()

  const [initialLoading, setInitialLoading] = useState(false)

  const mainRef = useRef(null)
  const bottomLineRef = useRef(null)

  /* Fetch new movies when scrolling */
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

  /* Setup initial delay */
  useEffect(() => {
    setInitialLoading(true)
    const timer = setTimeout(() => setInitialLoading(false), 500)

    return () => clearTimeout(timer)
  }, [])

  /* Fetch initial movies at each category (ie 'now_playing', 'popular', etc.) change. */
  useEffect(() => {
    if (!loading && !initialLoading) {
      dispatch(fetchInitialMovies(movieType))
    }
  }, [movieType])

  /* Reset details state when coming back to Main.jsx
   * (namely from Details.jsx).
   */
  useEffect(() => {
    if (detailsSuccess) {
      dispatch({ type: DETAILS_RESET })
    }
  }, [detailsSuccess, dispatch])

  return (
    <div className="main" onScroll={handleScroll} ref={mainRef}>
      {initialLoading ? <Spinner /> : results?.length ? <Search /> : <MainContent />}
      <div ref={bottomLineRef} />
    </div>
  )
}

export default Main
