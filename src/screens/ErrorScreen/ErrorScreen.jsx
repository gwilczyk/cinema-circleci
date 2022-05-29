import React from 'react'
import { func } from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import 'screens/ErrorScreen/ErrorScreen.scss'
import { setError } from 'redux/actions/errorActions'

const ErrorScreen = ({ resetError }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { message: errorMessage } = useSelector((state) => state.errors)

  const handleClick = () => {
    resetError()
    dispatch(setError()) /* no argument to setError to reset errors state */
    navigate('/')
  }

  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-message">{errorMessage || 'Something went wrong…'}</p>
      <div className="error-link" onClick={handleClick}>
        <i className="icon-home" /> Go back to home page.
      </div>
    </div>
  )
}

ErrorScreen.propTypes = {
  resetError: func
}

export default ErrorScreen
