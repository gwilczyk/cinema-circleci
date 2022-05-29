import { INIT_APP_ROUTES, SET_PATH_AND_URL } from 'redux/actions/routesTypes'

const INITIAL_STATE = {
  path: '',
  routes_array: [],
  url: ''
}

const routesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_PATH_AND_URL:
      return { ...state, path: action.payload.path, url: action.payload.url }
    case INIT_APP_ROUTES:
      return { ...state, routes_array: action.payload }
    default:
      return state
  }
}

export default routesReducer
