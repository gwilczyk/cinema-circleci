import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import placeholder from 'assets/lazy_loader.gif'

const LazyImage = ({ alt, children, className, src }) => {
  const [imageRef, setImageRef] = useState(null)
  const [imageSrc, setImageSrc] = useState(placeholder)

  useEffect(() => {
    let observer
    let didCancel = false

    const cb = (entries) => {
      entries.forEach((entry) => {
        if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
          setImageSrc((prev) => src)
          observer.unobserve(imageRef)
        }
      })
    }

    const options = {
      threshold: 0.01,
      rootMargin: '75%'
    }

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver((entries) => cb(entries), options)
        observer.observe(imageRef)
      } else {
        setImageSrc((prev) => src)
      }
    }

    return () => {
      didCancel = true
      if (observer?.unobserve) {
        observer.unobserve(imageRef)
      }
    }
  }, [imageRef, imageSrc, src])

  return (
    <div
      alt={alt}
      className={className}
      ref={setImageRef}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      {children}
    </div>
  )
}

LazyImage.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.any,
  src: PropTypes.string.isRequired
}

export default LazyImage
