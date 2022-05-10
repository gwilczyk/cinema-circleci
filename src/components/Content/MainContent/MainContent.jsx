import React from 'react'
import SlideShow from 'components/Content/SlideShow'
import './MainContent.scss'

const IMAGES = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4Xaf0afxbWT0zXRo6apRDS4y8jJPcM0dWg&usqp=CAU'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJMau2AO-RA_vXHvvXCSnlWetdSdyLJfcw&usqp=CAU'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW8tncnF8OA5k5qUyHbGRkGF4xNr1ZoUbQ&usqp=CAU'
  }
]

const MainContent = () => {
  return (
    <div className="main-content">
      <SlideShow images={IMAGES} />
      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>

      {/* display grid component */}
    </div>
  )
}

export default MainContent
