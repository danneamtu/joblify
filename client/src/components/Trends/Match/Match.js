import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { star } from '../../../assets/icons/icons'
import { lightDark } from '../../../styled-components/typography/colors'
const ContainerMatch = styled.div`
  & img {
    margin-right: 12px;
  }
`
const Chip = styled.div`
  margin-left: auto;
`
const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 100%;
  text-decoration: none;
  color: ${lightDark};
`

function Match() {
  const skills = ['react', 'node', 'type script', 'express', 'landba']
  return (
    <ContainerMatch>
      <h4>Match</h4>

      {skills.map((item) => (
        <StyledLink to="#">
          <img width="24" src="https://styled-components.com/atom.png" alt="" />
          <div> {item}</div>
          <Chip style={{ marginLeft: 'auto' }}>22</Chip>
          {star}
        </StyledLink>
      ))}

      <h5>View all</h5>
    </ContainerMatch>
  )
}

export default Match
