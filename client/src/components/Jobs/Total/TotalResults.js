import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { TotalContainer, TotalTitle, TotalSubTitle } from './styled'
function TotalResults({ total, location }) {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search)
  }
  let query = useQuery()
  const paramFavorites = query.get('favorites')

  return (
    <TotalContainer>
      <TotalTitle>{paramFavorites ? `Your Favorites Jobs` : `Front End Developer in ${!location ? 'Belgium' : location}`}</TotalTitle>
      <TotalSubTitle>{total || 0} jobs</TotalSubTitle>
    </TotalContainer>
  )
}

export default TotalResults
