import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { companyLogo, JobContainer, CompanyLogo, CompanyInfo, Favorite, JobTitle, JobSubTitle, Chip, Date } from './styled'
import { Row } from '../../../styled-components/responsive/row'
import { star, starFill } from '../../../assets/icons/icons'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function Job({ jobData }) {
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
    <Link style={{ textDecoration: 'none' }} to={theUri}>
      <JobContainer>
        <Row>
          <CompanyLogo>{companyLogo}</CompanyLogo>
          <CompanyInfo>
            <JobTitle>{title}</JobTitle>
            <JobSubTitle>{location}</JobSubTitle>
          </CompanyInfo>
          <Favorite onClick={() => setFavorite(!favorite)}>{!favorite ? star : starFill}</Favorite>
        </Row>
        <Row alignItems="center">
          <Chip>Mid-Senior level</Chip>
          <Chip>Score 38%</Chip>
          <Date>3d</Date>
        </Row>
      </JobContainer>
    </Link>
  )
}

export default Job
