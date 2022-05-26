import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from 'redux/store'

import DetailsScreen from 'screens/DetailsScreen'
import ErrorScreen from 'screens/ErrorScreen'
import MainScreen from 'screens/MainScreen'

import Header from 'components/Header'

import './App.scss'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />

      <div className="app">
        <Routes>
          <Route exact path="/" element={<MainScreen />} />

          <Route path="/:id/:name/details" element={<DetailsScreen />} />

          <Route path="*" element={<ErrorScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
