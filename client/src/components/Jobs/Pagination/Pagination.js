import React from 'react'
import { Link } from 'react-router-dom'
import { Ul, Li } from './styled'

const Pagination = ({ href, pageCurrent, pagePer, totalResults, order }) => {
  const createPagination = (href, pageCurrent, pagePer, totalResults, order) => {
    const pageStart = 1
    const pageEnd = Math.ceil(totalResults / pagePer)
    const pageCur = Number(pageCurrent)

    let byOrder = ''
    if (order) {
      byOrder = `&order=${order}`
    }

    let indexStart
    let indexEnd
    let left
    let right
    if (pageEnd <= 7) {
      indexStart = 1
      indexEnd = pageEnd
    } else {
      left = pageCur - 1
      if (left > 3) {
        indexStart = pageCur - 2
      } else if (left < 3) {
        indexStart = 1
      } else {
        indexStart = pageStart
      }
      right = pageCur + 2
      if (right < pageEnd) {
        indexEnd = right
      } else {
        indexEnd = pageEnd
      }
    }

    const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)
    const pages = range(indexStart, indexEnd)
    return {
      indexStart,
      indexEnd,
      pageCurrent: pageCur,
      pages,
      href,
      totalPages: pageEnd,
      order: byOrder,
    }
  }

  const pager = createPagination(href, pageCurrent, pagePer, totalResults, order)

  return (
    <Ul>
      {pager.indexStart - 2 > 1 && (
        <>
          <Li>
            <Link to={`${pager.href}`}>1</Link>
          </Li>
          <Li>
            <Link to={`${pager.href}start=2${pager.order}`}>...</Link>
          </Li>
        </>
      )}
      {pager.pages.map((page, index) => (
        <Li pageCurrent={pager.pageCurrent} page={page} key={index}>
          <Link to={`${pager.href}start=${page}${pager.order}`}>{page}</Link>
        </Li>
      ))}
      {pager.indexEnd < pager.totalPages && (
        <>
          <Li>
            <Link to={`${pager.href}start=${pager.totalPages - 1}${pager.order}`}>...</Link>
          </Li>
          <Li pageCurrent={pager.pageCurrent}>
            <Link to={`${pager.href}start=${pager.totalPages}${pager.order}`}>{pager.totalPages}</Link>
          </Li>
        </>
      )}
    </Ul>
  )
}

export default Pagination
