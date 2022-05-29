import { combineReducers, legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import detailsReducer from 'redux/reducers/detailsReducers'
import errorReducer from './reducers/errorReducers'
import movieReducer from 'redux/reducers/movieReducers'
import routesReducer from 'redux/reducers/routesReducers'
import searchReducer from 'redux/reducers/searchReducers'

const reducer = combineReducers({
  details: detailsReducer,
  errors: errorReducer,
  movieList: movieReducer,
  routes: routesReducer,
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
