import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { TotalContainer, TotalTitle, TotalSubTitle } from './styled'

function TotalResults() {
  const query = new URLSearchParams(useLocation().search)
  const favorites = query.get('favorites')
  const location = query.get('location')
  const data = useSelector((state) => state.jobs)

  let totalJobs
  data.data.data && data.data.data[0].Count.length > 0 && (totalJobs = data.data.data[0].Count[0].total)

  return (
    <TotalContainer>
      <TotalTitle>{favorites ? `Your Favorites Jobs` : `Front End Developer in ${!location ? 'Belgium' : location}`}</TotalTitle>
      <TotalSubTitle>{totalJobs || 0} jobs</TotalSubTitle>
    </TotalContainer>
  )
}

export default TotalResults
