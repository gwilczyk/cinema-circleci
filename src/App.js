import React from 'react'
import { Provider } from 'react-redux'
import './App.scss'
import Header from 'components/Header'
import Main from 'components/Main'
import store from 'redux/store'

const App = () => (
  <Provider store={store}>
    <Header />
    <div className="app">
      <Main />
    </div>
  </Provider>
)

export default App
