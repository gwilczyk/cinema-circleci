import React from 'react'

import Crew from 'components/Content/Crew'
import Media from 'components/Content/Media'
import Overview from 'components/Content/Overview'
import Rating from 'components/Content/Rating'
import Reviews from 'components/Content/Reviews'
import Tabs from 'components/Content/Tabs'

import 'components/Content/Details/Details.scss'

const Details = () => {
  return (
    <>
      <div className="movie-container">
        <div
          className="movie-bg"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/572487/pexels-photo-572487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'
          }}
        />

        <div className="movie-overlay" />

        <div className="movie-details">
          <div className="movie-image">
            <img
              alt=""
              src="https://images.pexels.com/photos/572487/pexels-photo-572487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>

          <div className="movie-body">
            <div className="movie-overview">
              <div className="title">
                Avengers <span>2020-12-03</span>
              </div>

              <div className="movie-genres">
                <ul className="genres">
                  <li>Action</li>
                  <li>Comedy</li>
                  <li>Sci-fi</li>
                </ul>
              </div>

              <div className="rating">
                <Rating className="rating-stars" rating={6.5} stars={10} />
                &nbsp;
                <span>6.5</span>
                <p>(200 reviews)</p>
              </div>

              <Tabs>
                <div label="Overview">
                  <Overview />
                </div>
                <div label="Crew">
                  <Crew />
                </div>
                <div label="Media">
                  <Media />
                </div>
                <div label="Reviews">
                  <Reviews />
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Details
