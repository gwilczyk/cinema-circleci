import { INIT_APP_ROUTES, SET_PATH_AND_URL } from 'redux/actions/routesTypes'

export const initAppRoutes = (routes) => async (dispatch) => {
  const payload = routes
  dispatch({ type: INIT_APP_ROUTES, payload })
}

export const setPathAndUrl =
  ({ path, url }) =>
  async (dispatch) => {
    const payload = { path, url }
    dispatch({ type: SET_PATH_AND_URL, payload })
  }
