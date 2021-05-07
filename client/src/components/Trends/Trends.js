import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'
import { getAllSkills } from '../../redux/actions/skillsActions'
import Skills from './Skills/Skills'
import { FilterContainer } from './styled'
import Countries from './Countries/Countries'
import Cities from './Cities/Cities'

function Filter() {
  const dispatch = useDispatch()
  const {
    data: { data: allLocations },
  } = useSelector((state) => state.locations)
  const { data: allSkills } = useSelector((state) => state.skills)

  useEffect(() => {
    dispatch(getLocations())
    dispatch(getAllSkills())
  }, [dispatch])

  return (
    <FilterContainer>
      {/* get all skills from db */}
      {allSkills && <Skills allSkills={allSkills} />}
      {allLocations && <Countries allLocations={allLocations} />}
      {allLocations && <Cities allLocations={allLocations} />}
    </FilterContainer>
  )
}

export default Filter
