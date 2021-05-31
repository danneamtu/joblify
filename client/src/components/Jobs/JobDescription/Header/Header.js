import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import moment from 'moment'

import { useFilters } from '../../../../useHooks/useFilters'
import { getJob } from '../../../../redux/actions/jobActions'

import { useJob } from '../../../../useHooks/useJob'
import FavoriteStar from '../../Job/Favorite/Favorite'
import { Row } from '../../../../styled-components/responsive/responsive'
import { boxArrowUp } from '../../../../assets/icons/icons'
import { CompanyLogo, Title, JobSubSubTitle, ColD, JobSubTitle, JobButtons } from './styled'
import { Btn } from '../../../../styled-components/buttons/buttons'

function Header({ currentJobId }) {
  const dispatch = useDispatch()
  const { filters } = useFilters()

  useEffect(() => {
    dispatch(getJob(filters.currentJobId))
  }, [dispatch, filters.currentJobId])
  console.log('this is insidejob description')

  const job = useJob(filters.currentJobId)
  return (
    <Row>
      <CompanyLogo>{job ? job.companyLogo ? <img src={job.companyLogo} alt={job.companyName} /> : job.companyName.charAt(0) : '...'}</CompanyLogo>
      <ColD>
        <Title>{job ? job.title : '...loading'}</Title>
        <JobSubTitle>
          {job ? job.companyName : '...loading'} &middot; {job ? job.location : '...loading'}
        </JobSubTitle>
        <JobSubSubTitle>{job && moment(job.timestamp).fromNow()}</JobSubSubTitle>
        <JobButtons>
          <Btn className="btn-primary ai-center d-inline-flex right-icon" href={job && job.apply} target="_blank" rel="noopener">
            Apply Now {boxArrowUp}
          </Btn>

          <FavoriteStar save={true} jobId={currentJobId} />
        </JobButtons>
      </ColD>
    </Row>
  )
}

export default Header
