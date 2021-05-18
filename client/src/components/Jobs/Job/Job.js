import { useState } from 'react'
import moment from 'moment'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { companyLogo, JobContainer, CompanyLogo, CompanyInfo, Favorite, JobTitle, JobSubTitle, Chip, Date } from './styled'
import { Row } from '../../../styled-components/responsive/row'
import { star, starFill } from '../../../assets/icons/icons'
import { CircleButton } from '../../../styled-components/buttons/buttons'
import { addFavorite } from '../../../redux/actions/visitorActions'
import FavoriteStar from './Favorite/Favorite'
import { timeAgo } from '../../../utils/utils'

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function Job({ jobData, index, key }) {
  const { _id: jobId, title, companyLogo, location, timestamp, companyName } = jobData
  const [favorite, setFavorite] = useState(false)
  const dispatch = useDispatch()

  let query = useQuery()
  const paramStart = query.get('start')
  const paramLocation = query.get('location')
  const paramSkills = query.get('skills')
  const paramFavorites = query.get('favorites')
  const currentJobId = query.get('currentJobId')

  let createParams = ''
  let createStart = ''

  console.log('the params for this are:', paramLocation, paramSkills)

  if (paramLocation && paramSkills) {
    createParams = `&location=${paramLocation}&skills=${paramSkills}`
  }
  if (paramLocation) {
    createParams = `&location=${paramLocation}`
  }
  if (paramSkills) {
    createParams = `&skills=${paramSkills}`
  }
  if (paramFavorites) {
    createParams = `&favorites=${paramFavorites}`
  }

  if (paramStart) {
    createStart = `&start=${paramStart}`
  }

  const { _id: visitorId } = useSelector((state) => state.visitor)
  const handleFavorite = () => {
    setFavorite(!favorite)
    dispatch(addFavorite(jobId, visitorId))
  }

  let theUri = `/jobs/search?currentJobId=${jobId}${createParams}${createStart}`
  let theMobileUri = `/jobs/view/search?currentJobId=${jobId}${createParams}`
  const isMobile = window.matchMedia('(max-width: 768px)')

  return (
    <JobContainer active={currentJobId === jobId ? true : false}>
      <FavoriteStar circle save={false} jobId={jobId} />
      <Link style={{ textDecoration: 'none' }} to={isMobile && isMobile.matches ? theMobileUri : theUri}>
        <Row>
          <CompanyLogo>{companyLogo ? <img src={companyLogo} alt={companyName} /> : companyName.charAt(0)}</CompanyLogo>
          <CompanyInfo>
            <JobTitle>
              {index}
              {title}
            </JobTitle>
            <JobSubTitle>
              {companyName} &middot; {location.replace(', Belgium', '')}
            </JobSubTitle>
          </CompanyInfo>
        </Row>
        <Row alignItems="center">
          <Chip>Mid-Senior level</Chip>
          <Chip>Score1</Chip>
          <Date>{timeAgo(timestamp)}</Date>
        </Row>
      </Link>
    </JobContainer>
  )
}

export default Job
