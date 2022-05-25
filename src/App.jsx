import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from 'redux/store'

import Details from 'components/Content/Details'
import Header from 'components/Header'
import Main from 'components/Main'

import './App.scss'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />

      <div className="app">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/:id/:name/details" element={<Details />} />

          <Route
            path="*"
            element={
              <main style={{ color: '#fff', padding: '1rem' }}>
                <p>There&apos;s nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
)

export default App
