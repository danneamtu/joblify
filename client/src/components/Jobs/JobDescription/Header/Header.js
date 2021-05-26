import moment from 'moment'
import { useJob } from '../../../../useHooks/useJob'
import FavoriteStar from '../../Job/Favorite/Favorite'
import { Row } from '../../../../styled-components/responsive/responsive'
import { boxArrowUp } from '../../../../assets/icons/icons'
import { CompanyLogo, Title, JobSubSubTitle, ColD, JobSubTitle, JobButtons } from './styled'
import { Btn } from '../../../../styled-components/buttons/buttons'

function Header({ jobId }) {
  const job = useJob(jobId)
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
          <FavoriteStar save={true} jobId={jobId} />
        </JobButtons>
      </ColD>
    </Row>
  )
}

export default Header
