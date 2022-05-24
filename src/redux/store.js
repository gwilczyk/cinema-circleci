import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import movieReducer from 'redux/reducers/movieReducers'
import searchReducer from 'redux/reducers/searchReducers'

const reducer = combineReducers({
  movieList: movieReducer,
  search: searchReducer
})

const initialState = {}
const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
