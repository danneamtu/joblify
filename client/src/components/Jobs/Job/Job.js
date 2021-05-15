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

const useQuery = () => {
  return new URLSearchParams(useLocation().search)
}

function Job({ jobData, index }) {
  const { _id: jobId, title, location, timestamp, companyName } = jobData
  const [favorite, setFavorite] = useState(false)
  const dispatch = useDispatch()

  let query = useQuery()
  const paramStart = query.get('start')
  const paramLocation = query.get('location')
  const paramSkills = query.get('skills')

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
  if (paramStart) {
    createStart = `&start=${paramStart}`
  }

  let theUri = `/jobs/search?currentJobId=${jobId}${createParams}${createStart}`

  const { _id: visitorId } = useSelector((state) => state.visitor)
  console.log('visitor id1', visitorId)

  const handleFavorite = () => {
    setFavorite(!favorite)
    dispatch(addFavorite(jobId, visitorId))
  }

  return (
    <JobContainer>
      <FavoriteStar jobId={jobId} />
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
          <Date>{moment(timestamp).fromNow().replace('seconds ago', 's').replace('weeks ago', 'w').replace('days ago', 'd')}</Date>
        </Row>
      </Link>
    </JobContainer>
  )
}

export default Job
