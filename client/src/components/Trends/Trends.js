import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'
import { getSkills } from '../../redux/actions/skillsActions'
import Skills from './Skills/Skills'
import { FilterContainer } from './styled'
import Countries from './Countries/Countries'
import Cities from './Cities/Cities'
import ChartStatistics from './Chart/Chart'

function Filter() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocations())
  }, [dispatch])

  const {
    data: { data: allLocations },
  } = useSelector((state) => state.locations)
  const { skills } = useSelector((state) => state.visitor)
  console.log('this is the location', allLocations)

  return (
    <>
      <ChartStatistics />
      {console.log('====trends part')}
      {allLocations && <Cities allLocations={allLocations} />}
      <FilterContainer>
        <Skills visitorSkills={skills} />
      </FilterContainer>
    </>
  )
}

export default Filter
