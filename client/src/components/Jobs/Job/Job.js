import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyLogo, JobContainer, CompanyLogo, CompanyInfo, Favorite, JobTitle, JobSubTitle, Chip, Date } from './styled'
import { Row } from '../../../styled-components/responsive/row'
import { star, starFill } from '../../../assets/icons/icons'
import { CircleButton } from '../../../styled-components/buttons/buttons'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function Job({ jobData, index }) {
  const { _id: jobId, title, location, companyName } = jobData
  const [favorite, setFavorite] = useState(false)

  let query = useQuery()
  let hasLocation, hasStart
  if (query.get('location')) {
    hasLocation = `&location=${query.get('location')}`
  }
  if (query.get('start')) {
    hasStart = `&start=${query.get('start')}`
  }
  let theUri = `/jobs/search?currentJobId=${jobId}${hasLocation}${hasStart}`

  return (
    <JobContainer>
      <Favorite onClick={() => setFavorite(!favorite)}>
        <CircleButton>{!favorite ? star : starFill}</CircleButton>
      </Favorite>
      <Link style={{ textDecoration: 'none' }} to={theUri}>
        <Row>
          <CompanyLogo>{companyLogo}</CompanyLogo>
          <CompanyInfo>
            <JobTitle>
              {index}
              {title}
            </JobTitle>
            <JobSubTitle>{location}</JobSubTitle>
          </CompanyInfo>
        </Row>
        <Row alignItems="center">
          <Chip>Mid-Senior level</Chip>
          <Chip>Score 38%</Chip>
          <Date>3d</Date>
        </Row>
      </Link>
    </JobContainer>
  )
}

export default Job
