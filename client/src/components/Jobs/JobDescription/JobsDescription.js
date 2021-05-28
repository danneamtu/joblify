import { useFilters } from '../../../useHooks/useFilters'
import { useJob } from '../../../useHooks/useJob'

import Score from './Score/Score'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description/Description'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import { TheChartMemoized } from './PieChart/TheChart'

import { Row, Col } from '../../../styled-components/responsive/responsive'
import { JobInfo, Title, JobSubTitle, Content } from './styled'

const JobDescription = () => {
  const { filters } = useFilters()
  const job = useJob(filters.currentJobId)
  return (
    <>
      {!filters.totalJobs ? (
        <JobInfo>
          <Title>Didn't find any jobs {filters.totalJobs}</Title>
          <JobSubTitle>Keep searching with less filters.</JobSubTitle>
        </JobInfo>
      ) : (
        <JobInfo>
          <Header />
          <Score />
          <Content>
            <Row alignItems="start">
              <Col md={6}>
                <TechnologiesDetected currentJobId={filters && filters.currentJobId} />
              </Col>
              <Col md={6}>
                <TheChartMemoized scoreFormula={job && job.scoreFormula} />
              </Col>
            </Row>
          </Content>
          <Description />
          <Footer />
        </JobInfo>
      )}
    </>
  )
}

export default JobDescription
