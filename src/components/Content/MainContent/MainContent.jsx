import React, { useState } from 'react'
import Grid from 'components/Content/Grid'
import Paginate from 'components/Content/Paginate'
import SlideShow from 'components/Content/SlideShow'
import './MainContent.scss'

const IMAGES = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4Xaf0afxbWT0zXRo6apRDS4y8jJPcM0dWg&usqp=CAU',
    rating: 6.5
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJMau2AO-RA_vXHvvXCSnlWetdSdyLJfcw&usqp=CAU',
    rating: 8.8
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW8tncnF8OA5k5qUyHbGRkGF4xNr1ZoUbQ&usqp=CAU',
    rating: 4
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJMau2AO-RA_vXHvvXCSnlWetdSdyLJfcw&usqp=CAU',
    rating: 3.8
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4Xaf0afxbWT0zXRo6apRDS4y8jJPcM0dWg&usqp=CAU',
    rating: 9.5
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4Xaf0afxbWT0zXRo6apRDS4y8jJPcM0dWg&usqp=CAU',
    rating: 6.5
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJMau2AO-RA_vXHvvXCSnlWetdSdyLJfcw&usqp=CAU',
    rating: 8.8
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW8tncnF8OA5k5qUyHbGRkGF4xNr1ZoUbQ&usqp=CAU',
    rating: 7
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW8tncnF8OA5k5qUyHbGRkGF4xNr1ZoUbQ&usqp=CAU',
    rating: 4
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4Xaf0afxbWT0zXRo6apRDS4y8jJPcM0dWg&usqp=CAU',
    rating: 9.5
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKzJMau2AO-RA_vXHvvXCSnlWetdSdyLJfcw&usqp=CAU',
    rating: 3.8
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0NW8tncnF8OA5k5qUyHbGRkGF4xNr1ZoUbQ&usqp=CAU',
    rating: 7
  }
]

const MainContent = () => {
  const [page, setPage] = useState(1)
  const pages = 10

  const paginate = (type) => {
    if (type === 'prev') {
      page > 1 ? setPage((prev) => prev - 1) : setPage(1)
    } else {
      page < pages ? setPage((prev) => prev + 1) : setPage(pages)
    }
  }

  return (
    <div className="main-content">
      <SlideShow images={IMAGES} />

      <div className="grid-movie-title">
        <div className="movie-type">Now Playing</div>
        <div className="paginate">
          <Paginate page={page} paginate={paginate} pages={10} />
        </div>
      </div>

      <Grid images={IMAGES} />
    </div>
  )
}

export default MainContent
