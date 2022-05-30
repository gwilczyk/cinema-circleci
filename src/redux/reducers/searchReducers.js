import {
  SEARCH_QUERY_FAILED,
  SEARCH_QUERY_REQUEST,
  SEARCH_QUERY_RESET,
  SEARCH_QUERY_SUCCESS
} from 'redux/actions/searchTypes'

const INITIAL_STATE = {
  error: {},
  loading: false,
  page: 1,
  pages: 0,
  query: '',
  results: [],
  success: false
}

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH_QUERY_FAILED:
      return { error: action.payload, loading: false, page: 1, pages: 0, success: false }
    case SEARCH_QUERY_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.payload.page,
        query: action.payload.query,
        success: false
      }
    case SEARCH_QUERY_RESET:
      return INITIAL_STATE
    case SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        pages: action.payload.pages,
        query: action.payload.query,
        results: action.payload.results,
        success: !!action.payload.query
      }
    default:
      return state
  }
}

export default searchReducer
