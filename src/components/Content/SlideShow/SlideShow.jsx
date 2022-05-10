import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import RenderArrows from './RenderArrows'
import './SlideShow.scss'

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [image, setImage] = useState(`${images[currentIndex]}`)

  const moveSlideIndex = (type) => {
    const lastIndex = images.length - 1

    if (type === 'prev') {
      /* Going to previous slide */
      currentIndex <= 0 ? setCurrentIndex(lastIndex) : setCurrentIndex((prev) => prev - 1)
    } else {
      /* Going to next slide */
      currentIndex >= lastIndex ? setCurrentIndex(0) : setCurrentIndex((prev) => prev + 1)
    }
  }

  const Indicators = ({ currentIndex }) => {
    const indicatorsList = images.map((slide, index) => {
      const btnClass =
        index === currentIndex ? 'slider-navButton slider-navButton--active' : 'slider-navButton'

      return <button className={btnClass} key={index} />
    })

    return <div className="slider-nav">{indicatorsList}</div>
  }

  /* Update image when currentIndex changes. */
  useEffect(() => setImage(images[currentIndex]), [currentIndex])

  /* Change image automatically every 5 seconds */
  useEffect(() => {
    const timeInterval = setInterval(() => moveSlideIndex('next'), [5000])

    return () => clearInterval(timeInterval)
  }, [image])

  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && image && (
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundColor: '#ccc'
              }}
            />
          )}
        </div>

        <RenderArrows action={moveSlideIndex} />
        <Indicators currentIndex={currentIndex} />
      </div>
    </>
  )
}

SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  currentIndex: PropTypes.number
}

export default SlideShow
