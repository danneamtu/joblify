import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'

import { checkSquare, arrowDown, arrowUp, sortUp } from '../../assets/icons/icons'
import { FilterContainer, Chip } from './styled'

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
      <h6>{allLocations && allLocations[0].totalJobs} front end developer jobs in 4 countries</h6>
      <h5>{sortUp} Trends</h5>
      <ul>
        {countries.map((item) => (
          <li>
            <div>
              {arrowUp}
              {item}
            </div>
            <Chip>22</Chip>
          </li>
        ))}
      </ul>
      <h5>City</h5>
      <ul>
        {countries.map((item) => (
          <li>
            <div>
              {arrowDown}
              {item}
            </div>
            <Chip>22</Chip>
          </li>
        ))}
      </ul>
      <h5>Technologies</h5>
      <ul>
        {skills.map((item) => (
          <li>
            <div>
              {arrowUp}
              {item}
            </div>
            <Chip>22</Chip>
          </li>
        ))}
      </ul>
    </FilterContainer>
  )
}

export default Filter
