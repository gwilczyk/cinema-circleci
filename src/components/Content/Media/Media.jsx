import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useSelector } from 'react-redux'

import 'components/Content/Media/Media.scss'

const Media = () => {
  const { posters, videos } = useSelector((state) => state.details)

  return (
    <>
      <div className="media">
        <div>
          <div className="media-title">Watch Trailer</div>

          <div className="media-videos">
            {videos.map(({ key, name }) => (
              <div className="video" key={uuidv4()}>
                <iframe
                  title={name}
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  src={`https://www.youtube.com/embed/${key}`}
                  frameBorder="1"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="media-title">Photos ({posters.length})</div>
          <div className="media-images">
            {posters.map(({ file_path }) => (
              <div
                className="image-cell"
                key={uuidv4()}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${file_path})`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Media
