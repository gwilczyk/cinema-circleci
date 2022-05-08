import React, { useEffect, useState } from 'react'
import './Header.scss'
import logo from 'assets/cinema-logo.svg'

const HEADER_LIST = [
  {
    id: 1,
    iconClass: 'fas fa-film',
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    iconClass: 'fas fa-fire',
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    iconClass: 'fas fa-star',
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    iconClass: 'fas fa-plus-square',
    name: 'Upcoming',
    type: 'upcoming'
  }
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

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
            {HEADER_LIST.map(({ id, iconClass, name, type }) => (
              <li key={id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={iconClass} />
                </span>
                &nbsp;
                <span className="header-list-name">{name}</span>
              </li>
            ))}
            {/* <li className="header-nav-item">Now Playing</li>
            <li className="header-nav-item">New Movies</li> */}
            <input className="search-input" placeholder="Search for a movie" type="text" />
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
