import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import Header from 'components/Header'
import store from 'redux/store'

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app">
      <h1>Setup React Redux</h1>
    </div>
  </Provider>
)

export default App
