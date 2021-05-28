import { useFilters } from '../../../../useHooks/useFilters'
import { useJob } from '../../../../useHooks/useJob'
import { Row } from '../../../../styled-components/responsive/responsive'
import { TitleInfo, TitleInfoDetail, ColInfo } from './styled'

function Score() {
  const { filters } = useFilters()
  const job = useJob(filters.currentJobId)

  return (
    <Row>
      <ColInfo>
        <TitleInfo>{job ? job.totalSkills : '...'}</TitleInfo>
        <TitleInfoDetail>Technologies detected</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo>{job ? parseFloat(Number(job.scoreFormula)).toFixed(2) : '...'} % </TitleInfo>
        <TitleInfoDetail>Your overall score</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo>Employment Type</TitleInfo>
        <TitleInfoDetail>{job ? job.employmentType : '...loading'}</TitleInfoDetail>
      </ColInfo>
    </Row>
  )
}

export default Score
