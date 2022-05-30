import {
  MOVIE_INITIAL_FAILED,
  MOVIE_INITIAL_REQUEST,
  MOVIE_INITIAL_SUCCESS,
  MOVIE_LOAD_BY_SCROLL_FAILED,
  MOVIE_LOAD_BY_SCROLL_REQUEST,
  MOVIE_LOAD_BY_SCROLL_SUCCESS,
  MOVIE_LOAD_NEXT_FAILED,
  MOVIE_LOAD_NEXT_REQUEST,
  MOVIE_LOAD_NEXT_SUCCESS,
  SET_MOVIE_TYPE
} from 'redux/actions/movieTypes'
import axios from 'axios'
import { setError } from 'redux/actions/errorActions'

export const fetchInitialMovies = (type) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_INITIAL_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`
    )

    const { page, results, total_pages } = data
    const payload = { movies: results, page, pages: total_pages }

    dispatch({ type: MOVIE_INITIAL_SUCCESS, payload })
  } catch (error) {
    const payload = {
      message: error.response?.data?.status_message
        ? error.response.data.status_message
        : error.response?.data?.message
        ? error.response.data.message
        : error.message,
      statusCode: error.response.status
    }
    dispatch({ type: MOVIE_INITIAL_FAILED, payload })
    dispatch(setError({ ...payload, type: MOVIE_INITIAL_FAILED }))
  }
}

export const fetchMoreMoviesByScroll = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LOAD_BY_SCROLL_REQUEST, payload: { page: pageNumber } })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${pageNumber}`
    )

    const { page, results, total_pages } = data
    const payload = { movies: results, page, pages: total_pages }

    dispatch({ type: MOVIE_LOAD_BY_SCROLL_SUCCESS, payload })
  } catch (error) {
    const payload = {
      message: error.response?.data?.status_message
        ? error.response.data.status_message
        : error.response?.data?.message
        ? error.response.data.message
        : error.message,
      statusCode: error.response.status
    }
    dispatch({ type: MOVIE_LOAD_BY_SCROLL_FAILED, payload })
    dispatch(setError({ ...payload, type: MOVIE_LOAD_BY_SCROLL_FAILED }))
  }
}

export const fetchNextMovies = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LOAD_NEXT_REQUEST, payload: { page: pageNumber } })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${pageNumber}`
    )

    const { page, results, total_pages } = data
    const payload = { movies: results, page, pages: total_pages }

    dispatch({ type: MOVIE_LOAD_NEXT_SUCCESS, payload })
  } catch (error) {
    const payload = {
      message: error.response?.data?.status_message
        ? error.response.data.status_message
        : error.response?.data?.message
        ? error.response.data.message
        : error.message,
      statusCode: error.response.status
    }
    dispatch({ type: MOVIE_LOAD_NEXT_FAILED, payload })
    dispatch(setError({ ...payload, type: MOVIE_LOAD_NEXT_FAILED }))
  }
}

export const setMovieType = (movieType) => async (dispatch) => {
  dispatch({ type: SET_MOVIE_TYPE, payload: { movieType, page: 1 } })
}
