import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Fuse from 'fuse.js'
import styled from 'styled-components'
import { searchIcon } from '../../../assets/icons/icons'


import locations from '../locations.json'



console.log('Fuse', Fuse)

const SearchBox = styled.div`
  position: relative;
  z-index: 1;
  & svg {
    position: absolute;
    z-index: 2;
    color: rgba(0, 0, 0, 0.664);
    top: 0;
    margin-top: auto;
    margin-bottom: auto;
    left: 8px;
    bottom: 0;
    width: 14px;
    height: 14px;
    color: rgba(255, 255, 255, 0.8);
  }

  .searchInput {
    color: rgba(255, 255, 255, 0.8);
    width: 290px;
    height: 30px;
    font-size: 15px;
    line-height: 30px;
    padding-left: 32px;
    padding-right: 16px;
    border-radius: 5px;
    border: none;
    margin-right: 8px;
    transition: 0.3s;
    outline-offset: 0;
    outline: none;
    background: none;
    border: solid 1px #2a2b34;
  }
  .searchInput:focus {
    /* width: 410px; */
    outline-offset: 0;
    outline: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`

const SearchResults = styled.div`
  position: absolute;
  width: 460px;
  left: 0;
  top: 34px;
`

const SearchResult = styled.div`
  padding: 10px 25px;
  background: #2a2b34;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.7);
  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  :hover {
    background: #1d1e26;
  }
`
const SearchTryFor = styled.div`
  border-top: solid 1px gray;
  color: black;
  padding: 0 15px 25px;
  background: #2a2b34;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  & a {
    border: solid 1px #1d1e26;
    padding: 5px 14px;
    background: #1d1e26;
    color: rgba(255, 255, 255, 0.7);
    border-radius: 5px;
    margin-right: 5px;
    font-size: 15px;
    display: inline-block;
  }
`
const TryText = styled.h4`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
`
function Search() {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchModal(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const [searchModal, setSearchModal] = useState(false)
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  const fuse = new Fuse(locations, {
    keys: ['country', 'city'],
    includeScore: true,
  })
  useEffect(() => {}, [])
  const [searchResults, setSearchResults] = useState([])
  const handleSearch = (e) => {
    setSearchResults(fuse.search(e.target.value, { limit: 5, order: 'total' }))
  }
  console.log(
    'get this nice results,',
    searchResults,
    searchResults.map((item) => item.item)
  )
  return (
    <SearchBox ref={wrapperRef}>
      {searchIcon}
      <input onChange={handleSearch} onClick={() => setSearchModal(true)} placeholder="City or country" className="searchInput" />
      {searchModal && (
        <SearchResults>
          {searchResults &&
            searchResults.map((res) => (
              <Link to={`/jobs/search?currentJobId=6085c51038b5be014c306581&location=${res.item.city}`}>
                <SearchResult onClick={() => setSearchModal(false)}>
                  {res.item.city}, {res.item.country} --- {res.item.total}
                </SearchResult>
              </Link>
            ))}
        </SearchResults>
      )}
    </SearchBox>
  )
}

export default Search
