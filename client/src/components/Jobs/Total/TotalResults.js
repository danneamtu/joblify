import React from 'react'
import styled from 'styled-components'

const TotalContainer = styled.div`
  background: #1d1d25;
  border-radius: 4px;
  color: white;
  margin-bottom: 16px;
  border-left: solid 3px blue;
  padding: 16px;
`
const TotalTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin: 0;
  text-transform: capitalize;
`
const TotalSubTitle = styled.h4`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.582);
  margin-top: 4px;
  margin-bottom: 0;
  font-weight: 300;
`

function TotalResults({ total, location }) {
  return (
    <TotalContainer>
      <TotalTitle>Front End Developer in {!location ? 'Belgium' : location}</TotalTitle>
      <TotalSubTitle>{total || 0} jobs</TotalSubTitle>
    </TotalContainer>
  )
}

export default TotalResults
