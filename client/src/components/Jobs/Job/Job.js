import { Link } from 'react-router-dom'

import { useJobsFilters } from '../../../useHooks/filters'
import { timeAgo } from '../../../utils/utils'
import { Row } from '../../../styled-components/responsive/responsive'

import FavoriteStar from './Favorite/Favorite'
import { JobContainer, CompanyLogo, CompanyInfo, JobTitle, JobSubTitle, Chip, Date } from './styled'

function Job({ jobData }) {
  const { _id: jobId, title, companyLogo, location, tags, timestamp, companyName, employmentType } = jobData

  const { filters } = useJobsFilters(jobId)
  const currentJobId = filters.currentJobId

  const isMobile = window.matchMedia('(max-width: 768px)')

  return (
    <JobContainer active={currentJobId === jobId ? true : false}>
      <FavoriteStar circle save={false} jobId={jobId} />
      <Link style={{ textDecoration: 'none' }} to={isMobile && isMobile.matches ? filters.jobUrlMobile : filters.jobUrlDesktop}>
        <Row>
          <CompanyLogo>{companyLogo ? <img src={companyLogo} alt={companyName} /> : companyName.charAt(0)}</CompanyLogo>
          <CompanyInfo>
            <JobTitle>{title}</JobTitle>
            <JobSubTitle>
              {companyName} &middot; {location.replace(', Belgium', '')}
            </JobSubTitle>
          </CompanyInfo>
        </Row>
        <Row alignItems="center">
          <Chip>{employmentType}</Chip>
          <Chip>
            {tags.length}
            {tags.length > 1 ? ' skills' : ' skill'}
          </Chip>
          <Date>{timeAgo(timestamp)}</Date>
        </Row>
      </Link>
    </JobContainer>
  )
}

export default Job
