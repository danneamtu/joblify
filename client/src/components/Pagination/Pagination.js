import React from 'react'

function Pagination({ currentPage, perPage, totalResults }) {
  const getPagination = () => {
    // 50
    // 10
    // total: 430
    let startPage, endPage

    const totalPages = Math.ceil(totalResults / perPage)
    if (totalPages <= 10) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= 6) {
        startPage = 1
        endPage = 10
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9
        endPage = totalPages
      } else {
        startPage = currentPage - 5
        endPage = currentPage + 4
      }
    }

    const startIndex = (currentPage - 1) * pageSize
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

    return {
      currentPage,
      perPage,
      totalPages,
      startPage: startPage,
      endPage: endPage,
      indexStart: startIndex,
      indexEnd: endIndex,
    }
  }
}

return (
  <ul className="pagination">
    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
      <a onClick={() => this.setPage(1)}>First</a>
    </li>
    <li className={pager.currentPage === 1 ? 'disabled' : ''}>
      <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
    </li>
    {pager.pages.map((page, index) => (
      <li key={index} className={pager.currentPage === page ? 'active' : ''}>
        <a onClick={() => this.setPage(page)}>{page}</a>
      </li>
    ))}
    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
      <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
    </li>
    <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
      <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
    </li>
  </ul>
)

export default Pagination
