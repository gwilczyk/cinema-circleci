/* eslint-disable multiline-ternary */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useSelector } from 'react-redux'

import 'components/Reviews/Reviews.scss'

const Reviews = () => {
  const { reviews, reviews_total } = useSelector((state) => state.details)

  return (
    <div className="movie-reviews">
      <div className="reviews-title">Reviews ({reviews_total})</div>

      {reviews.length ? (
        reviews.map(({ author, content }) => (
          <div className="reviews" key={uuidv4()}>
            <h3>{author}</h3>
            <div>{content}</div>
          </div>
        ))
      ) : (
        <p>No reviews to show</p>
      )}
    </div>
  )
}

export default Reviews
