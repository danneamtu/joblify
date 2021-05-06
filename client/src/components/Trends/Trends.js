import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'
import Skills from './Skills/Skills'
import { FilterContainer } from './styled'
import Countries from './Countries/Countries'
import Cities from './Cities/Cities'

function Filter() {
  const dispatch = useDispatch()
  const {
    data: { data: allLocations },
  } = useSelector((state) => state.locations)
  console.log('result locations', allLocations)

  useEffect(() => {
    dispatch(getLocations())
  }, [dispatch])

  return (
    <FilterContainer>
      <Skills />
      {allLocations && <Countries allLocations={allLocations} />}
      {allLocations && <Cities allLocations={allLocations} />}
    </FilterContainer>
  )
}

export default Filter
