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
  MOVIE_TYPE
} from 'redux/actions/movieTypes'
import axios from 'axios'

export const fetchInitialMovies = (type) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_INITIAL_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=1`
    )

    const { page, results, total_pages } = data
    const payload = { page, results, total_pages }

    dispatch({ type: MOVIE_INITIAL_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: MOVIE_INITIAL_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const fetchMoreMoviesByScroll = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LOAD_BY_SCROLL_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${pageNumber}`
    )

    const { page, results, total_pages } = data
    const payload = { page, results, total_pages }

    dispatch({ type: MOVIE_LOAD_BY_SCROLL_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: MOVIE_LOAD_BY_SCROLL_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const fetchNextMovies = (type, pageNumber) => async (dispatch) => {
  try {
    dispatch({ type: MOVIE_LOAD_NEXT_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&page=${pageNumber}`
    )

    const { page, results, total_pages } = data
    const payload = { page, results, total_pages }

    dispatch({ type: MOVIE_LOAD_NEXT_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: MOVIE_LOAD_NEXT_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const setMovieType = (movieType) => async (dispatch) => {
  dispatch({ type: MOVIE_TYPE, payload: { movieType, page: 1 } })
}
