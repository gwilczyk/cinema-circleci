import React from 'react'
import PropTypes from 'prop-types'
import './Paginate.scss'

const Paginate = ({ page, pages, paginate }) => {
  const prevButtonClass = page > 1 ? 'paginate-button' : 'paginate-button disable'
  const nextButtonClass = page < pages ? 'paginate-button' : 'paginate-button disable'

  return (
    <>
      <span className="page-count">
        {page} - {pages}
      </span>
      <button className={prevButtonClass} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={nextButtonClass} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  )
}

Paginate.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired
}

export default Paginate
