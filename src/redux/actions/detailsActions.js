import {
  DETAILS_CREDITS_FAILED,
  DETAILS_CREDITS_REQUEST,
  DETAILS_CREDITS_SUCCESS,
  DETAILS_IMAGES_FAILED,
  DETAILS_IMAGES_REQUEST,
  DETAILS_IMAGES_SUCCESS,
  DETAILS_OVERVIEW_FAILED,
  DETAILS_OVERVIEW_REQUEST,
  DETAILS_OVERVIEW_SUCCESS,
  DETAILS_REVIEWS_FAILED,
  DETAILS_REVIEWS_REQUEST,
  DETAILS_REVIEWS_SUCCESS,
  DETAILS_VIDEOS_FAILED,
  DETAILS_VIDEOS_REQUEST,
  DETAILS_VIDEOS_SUCCESS
} from 'redux/actions/detailsTypes'
import axios from 'axios'

export const getDetailsCredits = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_CREDITS_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )

    const { cast, crew } = data
    const payload = { cast, crew }
    dispatch({ type: DETAILS_CREDITS_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: DETAILS_CREDITS_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getDetailsImages = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_IMAGES_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR&include_image_language=fr,en`
    )

    const { backdrops, logos, posters } = data
    const payload = { backdrops, logos, posters }
    dispatch({ type: DETAILS_IMAGES_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: DETAILS_IMAGES_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getDetailsOverview = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_OVERVIEW_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )

    const {
      backdrop_path,
      budget,
      genres,
      overview,
      poster_path,
      production_companies,
      release_date,
      revenue,
      runtime,
      spoken_languages,
      status,
      tagline,
      title,
      vote_average,
      vote_count
    } = data
    const payload = {
      backdrop_path,
      budget,
      genres,
      overview,
      poster_path,
      production_companies,
      release_date,
      revenue,
      runtime,
      spoken_languages,
      status,
      tagline,
      title,
      vote_average,
      vote_count
    }
    dispatch({ type: DETAILS_OVERVIEW_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: DETAILS_OVERVIEW_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}

export const getDetailsReviews =
  (id, page = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: DETAILS_REVIEWS_REQUEST })

      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      )

      const { results: reviews, total_pages: reviews_pages, total_results: reviews_total } = data
      const payload = { reviews, reviews_page: page, reviews_pages, reviews_total }
      dispatch({ type: DETAILS_REVIEWS_SUCCESS, payload })
    } catch (error) {
      dispatch({
        type: DETAILS_REVIEWS_FAILED,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      })
    }
  }

export const getDetailsVideos = (id) => async (dispatch) => {
  try {
    dispatch({ type: DETAILS_VIDEOS_REQUEST })

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=fr-FR`
    )

    const { results } = data
    const payload = { videos: results }
    dispatch({ type: DETAILS_VIDEOS_SUCCESS, payload })
  } catch (error) {
    dispatch({
      type: DETAILS_VIDEOS_FAILED,
      payload:
        error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}
