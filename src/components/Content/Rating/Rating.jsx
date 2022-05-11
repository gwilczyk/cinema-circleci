import React, { Fragment, useEffect, useRef, useState } from 'react'
import { number, string } from 'prop-types'
import './Rating.scss'

const Rating = ({ rating, stars, className = '' }) => {
  const [starsNumber, setStarsNumber] = useState([])
  const ratingRef = useRef()

  useEffect(() => {
    const starsArray = [...Array(stars).keys()].map((index) => ++index)
    setStarsNumber(starsArray)

    const percentage = Math.floor((rating * 100) / stars)
    ratingRef.current.style.width = `${percentage}%`
  }, [rating, stars])

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {starsNumber.map((num) => (
          <Fragment key={num}>
            <i className="fa fa-star" aria-hidden="true" />
          </Fragment>
        ))}

        <div className={`front-stars ${className}`} ref={ratingRef}>
          {starsNumber.map((num) => (
            <Fragment key={num}>
              <i className="fa fa-star" aria-hidden="true" />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

Rating.propTypes = {
  className: string,
  rating: number.isRequired,
  stars: number.isRequired
}

export default Rating
