import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Fuse from 'fuse.js'

import { SearchBox, SearchResults, SearchResult, TotalJobs } from './styled'
import { searchIcon, locationIcon } from '../../../assets/icons/icons'
import locations from '../locations.json'

function Search() {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchModal({ open: false })
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const [searchModal, setSearchModal] = useState({ open: false, value: '' })

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)

  const {
    data: { data: locations },
  } = useSelector((state) => state.locations)

  const fuse = new Fuse(locations, {
    keys: ['country', 'city', 'justCountry'],
    includeScore: true,
  })

  const [searchResults, setSearchResults] = useState([])
  const handleSearch = (e) => {
    setSearchResults(fuse.search(e.target.value, { limit: 5, order: 'total' }))
  }
  return (
    <SearchBox ref={wrapperRef}>
      {locationIcon}
      <input onChange={handleSearch} onClick={() => setSearchModal({ open: true })} value={searchModal.value} placeholder="Search by city or region" className="searchInput" />
      {searchModal.open && (
        <SearchResults>
          {searchResults &&
            searchResults.map((res) => (
              <Link to={`/jobs/search?location=${res.item.city.replace(/\s/gi, '-')}`}>
                <SearchResult onClick={() => setSearchModal({ open: false, value: '' })}>
                  {res.item.city} <TotalJobs>{res.item.total}</TotalJobs>
                </SearchResult>
              </Link>
            ))}
        </SearchResults>
      )}
    </SearchBox>
  )
}
export default Search
