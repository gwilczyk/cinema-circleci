import {
  SEARCH_QUERY_FAILED,
  SEARCH_QUERY_REQUEST,
  SEARCH_QUERY_SUCCESS
} from 'redux/actions/searchTypes'
import axios from 'axios'
import { setError } from 'redux/actions/errorActions'

export const searchMovies = (query) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_QUERY_REQUEST })

    if (query) {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&query=${query}`
      )

      const payload = { query, results: data.results }
      dispatch({ type: SEARCH_QUERY_SUCCESS, payload })
    } else {
      const payload = { query: '', results: [] }
      dispatch({ type: SEARCH_QUERY_SUCCESS, payload })
    }
  } catch (error) {
    const payload = {
      message: error.response?.data?.status_message
        ? error.response.data.status_message
        : error.response?.data?.message
        ? error.response.data.message
        : error.message,
      statusCode: error.response.status
    }
    dispatch({ type: SEARCH_QUERY_FAILED, payload })
    dispatch(setError({ ...payload, type: SEARCH_QUERY_FAILED }))
  }
}
