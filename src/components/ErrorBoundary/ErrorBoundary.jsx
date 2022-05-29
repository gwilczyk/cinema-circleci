import React from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/react'

import ErrorScreen from 'screens/ErrorScreen'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.resetError = this.resetError.bind(this)
    this.state = {
      error: null,
      errorInfo: null,
      eventId: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo })

    if (process.env.NODE_ENV === 'production') {
      Sentry.withScope((scope) => {
        scope.setTag('Custom-Tag', 'ErrorBoundary')
        scope.setLevel('Error')
        scope.setExtras(errorInfo)

        const eventId = Sentry.captureException(error)
        this.setState({ eventId })
      })
    }
  }

  resetError() {
    this.setState((prev) => ({
      ...prev,
      error: null,
      errorInfo: null,
      eventId: null
    }))
  }

  render() {
    if (this.state.error) {
      return <ErrorScreen resetError={this.resetError} />
    } else {
      return this.props.children
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default ErrorBoundary
