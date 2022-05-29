import { SET_ERROR } from './errorTypes'

export const setError = (errorMessage) => async (dispatch) => {
  const payload = errorMessage || {
    message: '',
    statusCode: null,
    type: ''
  }
  dispatch({ type: SET_ERROR, payload })
}
