import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'
import { CircleButton } from '../../styled-components/buttons/buttons'
import Skills from './Skills/Skills'
import { star, checkSquare, arrowDown, arrowUp, sortUp, searchIcon } from '../../assets/icons/icons'
import { FilterContainer, Chip } from './styled'
import Countries from './Countries/Countries'
import Cities from './Cities/Cities'

function Filter() {
  const countries = ['Sweden', 'Belgium', 'Netherlands', 'ireland', 'denmark']
  const skills = ['react', 'node', 'type script', 'express', 'landba']

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
