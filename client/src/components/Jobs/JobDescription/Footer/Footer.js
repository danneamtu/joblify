import { useJob } from '../../../../useHooks/useJob'
import { Row } from '../../../../styled-components/responsive/responsive'
import { ColInfo, TitleInfo, TitleInfoDetail } from './styled'

function Footer({ jobId }) {
  const job = useJob(jobId)
  return (
    <Row>
      <ColInfo>
        <TitleInfo> Company</TitleInfo>
        <TitleInfoDetail>{job && job.companyName}</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo> Level</TitleInfo>
        <TitleInfoDetail>{job ? job.level : '...loading'}</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo> Employment Type</TitleInfo>
        <TitleInfoDetail>{job ? job.employmentType : '...loading'}</TitleInfoDetail>
      </ColInfo>
    </Row>
  )
}

export default Footer
