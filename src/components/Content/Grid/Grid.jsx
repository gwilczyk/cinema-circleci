/* eslint-disable react/prop-types */
import React from 'react'
import Rating from 'components/Content/Rating'
import './Grid.scss'

const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((image, index) => (
          <div key={index}>
            <div className="grid-cell" style={{ backgroundImage: `url(${image.url})` }}>
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <a href="#">Read More</a>
                </button>
              </div>

              <div className="grid-detail">
                <span className="grid-detail-title">
                  Mission Impossible Mission Impossible Mission Impossible Mission Impossible
                </span>

                <div className="grid-detail-rating">
                  <Rating rating={image.rating} stars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-detail-vote-average">{image.rating}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid
