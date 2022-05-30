import {
  MOVIE_INITIAL_FAILED,
  MOVIE_INITIAL_REQUEST,
  MOVIE_INITIAL_SUCCESS,
  MOVIE_LOAD_BY_SCROLL_SUCCESS,
  MOVIE_LOAD_BY_SCROLL_REQUEST,
  MOVIE_LOAD_BY_SCROLL_FAILED,
  MOVIE_LOAD_NEXT_FAILED,
  MOVIE_LOAD_NEXT_REQUEST,
  MOVIE_LOAD_NEXT_SUCCESS,
  MOVIE_LOAD_PREV,
  SET_MOVIE_TYPE
} from 'redux/actions/movieTypes'

const INITIAL_STATE = { movies: [], movieType: 'now_playing', page: 1, pages: 1 }

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIE_INITIAL_FAILED:
    case MOVIE_LOAD_BY_SCROLL_FAILED:
    case MOVIE_LOAD_NEXT_FAILED:
      return { loading: false, error: action.payload }
    case MOVIE_INITIAL_REQUEST:
      return { ...state, loading: true }
    case MOVIE_LOAD_BY_SCROLL_REQUEST:
    case MOVIE_LOAD_NEXT_REQUEST:
      return { ...state, loading: true, page: action.payload.page }
    case MOVIE_INITIAL_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: action.payload.movies,
        page: action.payload.page,
        pages: action.payload.pages
      }
    case MOVIE_LOAD_BY_SCROLL_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...state.movies, ...action.payload.movies],
        page: action.payload.page,
        pages: action.payload.pages
      }
    case MOVIE_LOAD_NEXT_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: [...action.payload.movies, ...state.movies],
        page: action.payload.page,
        pages: action.payload.pages
      }
    case MOVIE_LOAD_PREV:
      return {
        ...state,
        movies: state.movies.slice(20),
        page: action.payload.page
      }
    case SET_MOVIE_TYPE:
      return {
        ...state,
        movies: [],
        movieType: action.payload.movieType,
        page: action.payload.page
      }
    default:
      return state
  }
}

export default movieReducer
