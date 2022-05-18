import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMovieType } from 'redux/actions/movieActions'

import './Header.scss'
import logo from 'assets/cinema-logo.svg'

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    type: 'upcoming'
  }
]

const Header = () => {
  const dispatch = useDispatch()
  const { movieType } = useSelector((state) => state.movieList)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  const handleClick = (type) => {
    isMenuOpen && toggleMenu()
    dispatch(setMovieType(type))
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('header-nav-open')
    } else {
      document.body.classList.remove('header-nav-open')
    }
  }, [isMenuOpen])

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img src={logo} alt="" />
          </div>

          <div
            className={`${isMenuOpen ? 'header-menu-toggle is-active' : 'header-menu-toggle'}`}
            id="header-mobile-menu"
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`${isMenuOpen ? 'header-nav header-mobile-nav' : 'header-nav'}`}>
            {HEADER_LIST.map(({ id, iconClass, type }) => (
              <li
                key={id}
                className={movieType === type ? 'header-nav-item active-item' : 'header-nav-item'}
                onClick={() => handleClick(type)}
              >
                <span className="header-list-name">
                  <i className={iconClass} />
                </span>
                &nbsp;
                <span className="header-list-name">
                  {type
                    .split('_')
                    .map((elt) => elt[0].toUpperCase() + elt.slice(1).toLowerCase())
                    .join(' ')}
                </span>
              </li>
            ))}

            <input className="search-input" placeholder="Search for a movie" type="text" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
