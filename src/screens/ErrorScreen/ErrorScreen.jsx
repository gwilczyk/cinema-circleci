import React from 'react'
import { Link } from 'react-router-dom'

import 'screens/ErrorScreen/ErrorScreen.scss'

const ErrorScreen = () => {
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-message">Something went wrong…</p>
      <Link className="error-link" to="/">
        <i className="icon-home" /> Go back to home page.
      </Link>
    </div>
  )
}

export default ErrorScreen
