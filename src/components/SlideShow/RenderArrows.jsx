import React from 'react'
import PropTypes from 'prop-types'

const RenderArrows = ({ action }) => {
  return (
    <div className="slider-arrows">
      <div className="slider-arrow slider-arrow--left" onClick={() => action('prev')} />
      <div className="slider-arrow slider-arrow--right" onClick={() => action('next')} />
    </div>
  )
}

RenderArrows.propTypes = {
  action: PropTypes.func.isRequired
}

export default RenderArrows
