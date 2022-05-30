import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { initAppRoutes } from 'redux/actions/routesActions'

import ErrorBoundary from 'components/ErrorBoundary'
import Header from 'components/Header'

import DetailsScreen from 'screens/DetailsScreen'
import MainScreen from 'screens/MainScreen'
import SearchScreen from 'screens/SearchScreen'

import 'App.scss'

const ROUTES_ARRAY = [
  { id: 0, path: '/', element: <MainScreen /> },
  { id: 1, path: '/:id/:name/details', element: <DetailsScreen /> },
  { id: 2, path: '/search', element: <SearchScreen /> }
]

const App = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initAppRoutes(ROUTES_ARRAY))
  }, [initAppRoutes, ROUTES_ARRAY])

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>

      <div className="app">
        <Routes>
          {ROUTES_ARRAY.map(({ id, path, element }) => (
            <Route key={id} exact path={path} element={element} {...props} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

App.propTypes = {
  props: PropTypes.any
}

export default App
