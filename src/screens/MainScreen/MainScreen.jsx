/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import { useMatch } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { fetchInitialMovies, fetchMoreMoviesByScroll } from 'redux/actions/movieActions'
import { setPathAndUrl } from 'redux/actions/routesActions'
import { DETAILS_RESET } from 'redux/actions/detailsTypes'

import MainContent from 'components/MainContent'
import Spinner from 'components/Spinner'

import 'screens/MainScreen/MainScreen.scss'

const MainScreen = (props) => {
  const dispatch = useDispatch()
  const { success: detailsSuccess } = useSelector((state) => state.details)
  const { message: errorMessage } = useSelector((state) => state.errors)
  const { loading, movieType, page, pages } = useSelector((state) => state.movieList)

  const [initialLoading, setInitialLoading] = useState(false)

  const mainRef = useRef(null)
  const bottomLineRef = useRef(null)

  const matchMainRoute = useMatch('/')

  /* Setup path and url states */
  useEffect(() => {
    const path = matchMainRoute.pattern.path
    const url = matchMainRoute.pathname
    dispatch(setPathAndUrl({ path, url }))
  }, [matchMainRoute.pattern.path, matchMainRoute.pathname])

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
    const timer = setTimeout(() => setInitialLoading(false), 2000)

    return () => clearTimeout(timer)
  }, [])

  /* Fetch initial movies at each category (ie 'now_playing', 'popular', etc.) change. */
  useEffect(() => {
    if (!loading && !initialLoading && !errorMessage) {
      dispatch(fetchInitialMovies(movieType))
    }
  }, [errorMessage, movieType])

  /* Reset details state when coming back to Main.jsx
   * (namely from Details.jsx).
   */
  useEffect(() => {
    if (detailsSuccess) {
      dispatch({ type: DETAILS_RESET })
    }
  }, [detailsSuccess, dispatch])

  return (
    <>
      {!errorMessage && (
        <div className="main" onScroll={handleScroll} ref={mainRef}>
          {initialLoading ? <Spinner /> : <MainContent />}
          <div ref={bottomLineRef} />
        </div>
      )}
    </>
  )
}

export default MainScreen
