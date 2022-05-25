import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import RenderArrows from './RenderArrows'

import './SlideShow.scss'

const SlideShow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const [image, setImage] = useState(`${images[0]}`)

  const moveSlideIndex = (type) => {
    const lastIndex = images.length - 1

    if (type === 'prev') {
      /* Going to previous slide */
      slideIndex <= 0 ? setSlideIndex(lastIndex) : setSlideIndex((prev) => prev - 1)
    } else {
      /* Going to next slide */
      slideIndex >= lastIndex ? setSlideIndex(0) : setSlideIndex((prev) => prev + 1)
    }
  }

  const Indicators = ({ slideIndex }) => {
    const indicatorsList = images.map((slide, index) => {
      const btnClass =
        index === slideIndex ? 'slider-navButton slider-navButton--active' : 'slider-navButton'

      return <button className={btnClass} key={index} />
    })

    return <div className="slider-nav">{indicatorsList}</div>
  }

  /* Set initial image */
  useEffect(() => setImage(images[0]), [images])

  /* Update image when slideIndex changes. */
  useEffect(() => setImage(images[slideIndex]), [slideIndex])

  /* Change image automatically every 5 seconds */
  useEffect(() => {
    const timeInterval = setTimeout(() => moveSlideIndex('next'), [5000])

    return () => clearTimeout(timeInterval)
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
        <Indicators slideIndex={slideIndex} />
      </div>
    </>
  )
}

SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  slideIndex: PropTypes.number
}

export default SlideShow
