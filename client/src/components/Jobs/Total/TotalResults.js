import { useLocation } from 'react-router-dom'
import { TotalContainer, TotalTitle, TotalSubTitle } from './styled'

function TotalResults({ totalJobs }) {
  const query = new URLSearchParams(useLocation().search)
  const favorites = query.get('favorites')
  const location = query.get('location')

  return (
    <TotalContainer>
      <TotalTitle>{favorites ? `Your Favorites Jobs` : `Front End Developer in ${!location ? 'Belgium' : location}`}</TotalTitle>
      <TotalSubTitle>{totalJobs || 0} jobs</TotalSubTitle>
    </TotalContainer>
  )
}

export default TotalResults
