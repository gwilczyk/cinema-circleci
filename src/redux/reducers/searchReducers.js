import {
  SEARCH_QUERY_FAILED,
  SEARCH_QUERY_REQUEST,
  SEARCH_QUERY_SUCCESS
} from 'redux/actions/searchTypes'

const searchReducer = (state = { query: '', results: [] }, action) => {
  switch (action.type) {
    case SEARCH_QUERY_FAILED:
      return { loading: false, error: action.payload }
    case SEARCH_QUERY_REQUEST:
      return { ...state, loading: true }
    case SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        query: action.payload.query,
        results: action.payload.results
      }
    default:
      return state
  }
}

export default searchReducer
