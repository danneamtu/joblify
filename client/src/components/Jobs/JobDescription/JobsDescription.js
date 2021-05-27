import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFilters } from '../../../useHooks/useFilters'

import Score from './Score/Score'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description/Description'

import { getJob } from '../../../redux/actions/jobActions'

import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import TheChart from './PieChart/TheChart'

import { Row, Col } from '../../../styled-components/responsive/responsive'

import { JobInfo, Title, JobSubTitle, Content } from './styled'

const JobDescription = () => {
  const dispatch = useDispatch()
  const { filters } = useFilters()

  useEffect(() => {
    dispatch(getJob(filters.currentJobId))
  }, [dispatch, filters.currentJobId])

  return (
    <>
      {!filters.totalJobs ? (
        <JobInfo>
          <Title>Didn't find any jobs {filters.totalJobs}</Title>
          <JobSubTitle>Keep searching with less filters.</JobSubTitle>
        </JobInfo>
      ) : (
        <JobInfo>
          <Header jobId={filters.currentJobId} />
          <Score jobId={filters.currentJobId} />
          <Content>
            <Row alignItems="start">
              <Col md={6}>
                <TechnologiesDetected jobId={filters.currentJobId} />
              </Col>
              <Col md={6}>
                <TheChart jobId={filters.currentJobId} />
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
