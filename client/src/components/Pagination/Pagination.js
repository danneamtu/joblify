import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Ul = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 16px;
`
const Li = styled.li`
  list-style-type: none;
  margin-left: 2px;
  margin-right: 2px;

  & a {
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    display: inline-block;
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    font-size: 14px;
    border-radius: 50%;
    color: rgba(255, 255, 255, 0.7);
    background: ${(props) => (props.pageCurrent && props.pageCurrent === props.page ? '#1d1e26;' : 'none')};
  }
  & a:hover {
    background: #1d1e26;
  }
`

const Pagination = ({ href, pageCurrent, pagePer, totalResults }) => {
  const createPagination = (href, pageCurrent, pagePer, totalResults) => {
    // get pages raport
    const pageStart = 1
    const pageEnd = Math.ceil(totalResults / pagePer)
    const pageCur = Number(pageCurrent)
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

    console.log('Total Pages:', pageEnd)
    console.log('Curent page:', pageCur)
    console.log('left:', left, 'indexStart:', indexStart)
    console.log('right:', right, 'indexRight:', indexEnd)

    const range = (start, end, length = end - start + 1) => Array.from({ length }, (_, i) => start + i)
    const pages = range(indexStart, indexEnd)
    return {
      indexStart,
      indexEnd,
      pageCurrent: pageCur,
      pages,
      href,
      totalPages: pageEnd,
    }
  }

  const pager = createPagination(href, pageCurrent, pagePer, totalResults)

  return (
    <Ul>
      {pager.indexStart - 2 > 1 && (
        <>
          <Li>
            <Link to={`${pager.href}&start=1`}>1</Link>
          </Li>
          <Li>
            <Link to={`${pager.href}&start=2`}>...</Link>
          </Li>
        </>
      )}

      {pager.pages.map((page, index) => (
        <Li pageCurrent={pager.pageCurrent} page={page} key={index}>
          <Link to={`${pager.href}&start=${page}`}>{page}</Link>
        </Li>
      ))}
      {pager.indexEnd < pager.totalPages && (
        <>
          <Li>
            <Link to={`${pager.href}&start=${pager.totalPages - 1}`}>...</Link>
          </Li>
          <Li pageCurrent={pager.pageCurrent}>
            <Link to={`${pager.href}&start=${pager.totalPages}`}>{pager.totalPages}</Link>
          </Li>
        </>
      )}
    </Ul>
  )
}

export default Pagination
