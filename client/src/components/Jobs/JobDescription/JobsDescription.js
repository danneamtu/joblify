import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFilters } from '../../../useHooks/useFilters'
import { getJob } from '../../../redux/actions/jobActions'

import Score from './Score/Score'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description/Description'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import { TheChartMemoised } from './PieChart/TheChart'

import { Row, Col } from '../../../styled-components/responsive/responsive'

import { JobInfo, Title, JobSubTitle, Content } from './styled'

const JobDescription = () => {
  const { filters } = useFilters()

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
                <TechnologiesDetected jobId={filters.currentJobId} />
              </Col>
              <Col md={6}>
                <TheChartMemoised jobId={filters.currentJobId} />
              </Col>
            </Row>
          </Content>
          <Description jobId={filters.currentJobId} />
          <Footer jobId={filters.currentJobId} />
        </JobInfo>
      )}
    </>
  )
}

export default JobDescription
