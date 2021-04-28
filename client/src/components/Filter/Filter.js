import React from 'react'
import styled from 'styled-components'
import { checkSquare, arrowDown, arrowUp, sortUp } from '../../assets/icons/icons'

const FilterContainer = styled.div`
  color: rgba(150, 118, 118, 0.64);
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  svg {
    margin-right: 5px;
  }
`
const Chip = styled.div`
  padding: 4px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  font-size: 12px;
`

function Filter() {
  const countries = ['Sweden', 'Belgium', 'Netherlands', 'ireland', 'denmark']
  const skills = ['react', 'node', 'type script', 'express', 'landba']

  return (
    <FilterContainer>
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
