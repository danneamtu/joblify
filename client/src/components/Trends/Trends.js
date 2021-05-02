import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocations } from '../../redux/actions/locationsActions'
import { CircleButton } from '../../styled-components/buttons/buttons'
import Match from './Match/Match'
import { star, checkSquare, arrowDown, arrowUp, sortUp, searchIcon } from '../../assets/icons/icons'
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
      <Match />
      <hr />
      <p>{allLocations && allLocations[0].totalJobs} 4392 Front end developer jobs from 6 European countries, from the last 7 days</p>
      <ul>
        {allLocations &&
          allLocations.map(
            (item) =>
              item.justCountry &&
              item.justCountry.length > 2 && (
                <li>
                  <div> {item.justCountry}</div>
                  <Chip style={{ marginLeft: 'auto' }}>{item.total}</Chip>
                  {arrowUp}
                </li>
              )
          )}
      </ul>

      <h5>City</h5>
      <ul>
        {allLocations &&
          allLocations.map(
            (item) =>
              item.city &&
              item.city.length > 2 && (
                <li>
                  <div> {item.city}</div>
                  <Chip style={{ marginLeft: 'auto' }}>{item.total}</Chip>
                  {arrowUp}
                </li>
              )
          )}
      </ul>
    </FilterContainer>
  )
}

export default Filter
