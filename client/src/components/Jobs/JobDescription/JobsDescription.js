import React, { useState, useEffect, useContext, createContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment'

import { JobDescriptionContext } from './Context/createContext'
import Score from './Score/Score'
import { getJob } from '../../../redux/actions/jobActions'

import { Row } from '../../../styled-components/responsive/row'
import { Col } from '../../../styled-components/responsive/col'
import { Btn } from '../../../styled-components/buttons/buttons'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import TheChart from './PieChart/TheChart'
import FavoriteStar from '../Job/Favorite/Favorite'

import { boxArrowUp, star } from '../../../assets/icons/icons'
import { JobInfo, CompanyLogo, CompanyShare, Title, TitleInfo, JobSubSubTitle, TitleInfoDetail, ColD, JobSubTitle, ColInfo, Content, JobButtons } from './styled'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function createMarkup(desc) {
  return { _html: desc }
}

const JobDescription = (props) => {
  const dispatch = useDispatch()
  const jobState = useSelector((state) => state.job)
  const lastJobIdFromState = useSelector((state) => state.jobs)

  let searchJobId
  let query = useQuery()
  searchJobId = query.get('currentJobId')

  if (!searchJobId) {
    if (lastJobIdFromState.data.data) {
      const jobDetailsFromState = lastJobIdFromState.data.data[0].Jobs[0]
      searchJobId = jobDetailsFromState._id
    }
  }

  const jobDetailsFromState = jobState.data[searchJobId]
  let apply
  if (jobDetailsFromState) {
    // to fix redirects
    Array.isArray(jobDetailsFromState.data.apply) ? (apply = jobDetailsFromState.data.apply[0]) : (apply = jobDetailsFromState.data.apply)
  } else {
  }

  const [scoreContext, setScoreContext] = useState({ scoreContext: 0, setScoreContext: 0 })
  const scoreFormula = (scoreContext.totalScore * 100) / scoreContext.totalSkills

  useEffect(() => {
    dispatch(getJob(searchJobId))
  }, [dispatch, searchJobId])

  return (
    <JobDescriptionContext.Provider value={{ scoreContext, setScoreContext }}>
      <JobInfo>
        <Row>
          {console.log('------========= load job description')}
          <CompanyLogo>{jobDetailsFromState ? jobDetailsFromState.data.companyLogo ? <img src={jobDetailsFromState && jobDetailsFromState.data.companyLogo} alt={jobDetailsFromState && jobDetailsFromState.data.companyName} /> : jobDetailsFromState.data.companyName.charAt(0) : '...'}</CompanyLogo>
          <ColD>
            <Title>{jobDetailsFromState ? jobDetailsFromState.data.title : '...loading'}</Title>
            <JobSubTitle>
              {jobDetailsFromState ? jobDetailsFromState.data.companyName : '...loading'} &middot; {jobDetailsFromState ? jobDetailsFromState.data.location : '...loading'}
            </JobSubTitle>
            <JobSubSubTitle>{jobDetailsFromState && moment(jobDetailsFromState.data.timestamp).fromNow()}</JobSubSubTitle>
            <JobButtons>
              <Btn className="btn-primary ai-center d-inline-flex right-icon" href={jobDetailsFromState && apply} target="_blank" rel="noopener">
                Apply Now {boxArrowUp}
              </Btn>
              <FavoriteStar save={true} jobId={searchJobId} />
            </JobButtons>
          </ColD>
          <Col md={1}>
            <CompanyShare />
          </Col>
        </Row>

        <Score employmentType={jobDetailsFromState && jobDetailsFromState.data.employmentType} jobId={searchJobId} />

        <Content>
          <Row alignItems="start">
            <Col md={6}>{jobDetailsFromState && <TechnologiesDetected jobId={searchJobId} tags={jobDetailsFromState.data.tags} />}</Col>
            <Col md={6}>{(console.log('-- this is jobdescription chart load'), jobDetailsFromState && <TheChart id={searchJobId} />)}</Col>
          </Row>

          {jobDetailsFromState && <p dangerouslySetInnerHTML={{ __html: jobDetailsFromState.data.descriptionH }}></p>}
        </Content>
        <Row>
          <ColInfo>
            <TitleInfo> Company</TitleInfo>
            <TitleInfoDetail>{jobDetailsFromState && jobDetailsFromState.data.companyName}</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Level</TitleInfo>
            <TitleInfoDetail>{jobDetailsFromState ? jobDetailsFromState.data.level : '...loading'}</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Employment Type</TitleInfo>
            <TitleInfoDetail>{jobDetailsFromState ? jobDetailsFromState.data.employmentType : '...loading'}</TitleInfoDetail>
          </ColInfo>
        </Row>
      </JobInfo>
    </JobDescriptionContext.Provider>
  )
}

export default JobDescription
