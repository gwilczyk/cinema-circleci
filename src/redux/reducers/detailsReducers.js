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
  DETAILS_RESET,
  DETAILS_REVIEWS_FAILED,
  DETAILS_REVIEWS_REQUEST,
  DETAILS_REVIEWS_SUCCESS,
  DETAILS_VIDEOS_FAILED,
  DETAILS_VIDEOS_REQUEST,
  DETAILS_VIDEOS_SUCCESS
} from 'redux/actions/detailsTypes'

const INITIAL_STATE = {
  backdrop_path: '',
  backdrops: [],
  budget: 0,
  cast: [],
  crew: [],
  genres: [],
  logos: [],
  overview: '',
  poster_path: '',
  posters: [],
  production_companies: [],
  revenue: 0,
  reviews: [],
  reviews_page: 1,
  reviews_pages: 0,
  reviews_total: 0,
  runtime: 0,
  spoken_languages: [],
  status: '',
  success: false,
  tagline: '',
  videos: []
}

const detailsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAILS_RESET:
      return { ...INITIAL_STATE }

    case DETAILS_CREDITS_FAILED:
    case DETAILS_IMAGES_FAILED:
    case DETAILS_OVERVIEW_FAILED:
    case DETAILS_REVIEWS_FAILED:
    case DETAILS_VIDEOS_FAILED:
      return { loading: false, error: action.payload }

    case DETAILS_CREDITS_REQUEST:
    case DETAILS_IMAGES_REQUEST:
    case DETAILS_OVERVIEW_REQUEST:
    case DETAILS_REVIEWS_REQUEST:
    case DETAILS_VIDEOS_REQUEST:
      return { ...state, loading: true }

    case DETAILS_CREDITS_SUCCESS:
      return { ...state, cast: action.payload.cast, crew: action.payload.crew }
    case DETAILS_IMAGES_SUCCESS:
      return {
        ...state,
        backdrops: action.payload.backdrops,
        logos: action.payload.logos,
        posters: action.payload.posters
      }
    case DETAILS_OVERVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        backdrop_path: action.payload.backdrop_path,
        budget: action.payload.budget,
        genres: action.payload.genres,
        overview: action.payload.overview,
        poster_path: action.payload.poster_path,
        production_companies: action.payload.production_companies,
        release_date: action.payload.release_date,
        revenue: action.payload.revenue,
        runtime: action.payload.runtime,
        spoken_languages: action.payload.spoken_languages,
        status: action.payload.status,
        success: true,
        tagline: action.payload.tagline,
        title: action.payload.title,
        vote_average: action.payload.vote_average,
        vote_count: action.payload.vote_count
      }
    case DETAILS_REVIEWS_SUCCESS:
      return {
        ...state,
        reviews: action.payload.reviews,
        reviews_page: action.payload.reviews_page,
        reviews_pages: action.payload.reviews_pages,
        reviews_total: action.payload.reviews_total
      }
    case DETAILS_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload.videos }
    default:
      return state
  }
}

export default detailsReducer
