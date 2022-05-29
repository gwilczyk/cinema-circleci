import { SET_ERROR } from 'redux/actions/errorTypes'

const errorReducer = (state = { message: '', statusCode: null }, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.payload.message,
        statusCode: action.payload.statusCode,
        type: action.payload.type
      }
    default:
      return state
  }
}

export default errorReducer
