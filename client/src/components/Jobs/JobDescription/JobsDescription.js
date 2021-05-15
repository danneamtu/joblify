import React, { useState, useEffect, useContext, createContext } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { JobDescriptionContext } from './Context/createContext'
import Score from './Score/Score'
import { getJob } from '../../../redux/actions/jobActions'

import { Row } from '../../../styled-components/responsive/row'
import { Col } from '../../../styled-components/responsive/col'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import TheChart from './PieChart/TheChart'

import { boxArrowUp, star } from '../../../assets/icons/icons'
import { JobInfo, CompanyLogo, CompanyInfo, CompanyShare, Title, TitleInfo, TitleInfoDetail, ColD, JobSubTitle, ButtonApply, ButtonSave, ColInfo, Content, JobButtons } from './styled'
const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

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

  useEffect(() => {}, [searchJobId])
  const jobDetailsFromState = jobState.data[searchJobId]

  const [scoreContext, setScoreContext] = useState({ scoreContext: 0, setScoreContext: 0 })

  useEffect(() => {
    dispatch(getJob(searchJobId))
  }, [searchJobId])

  return (
    <JobDescriptionContext.Provider value={{ scoreContext, setScoreContext }}>
      <JobInfo>
        <Row>
          <CompanyLogo>{companyLogo}</CompanyLogo>
          <ColD>
            <Title>
              {jobDetailsFromState ? console.log(jobDetailsFromState.title) : ''}
              {jobDetailsFromState ? jobDetailsFromState.data.title : '...loading'}
            </Title>
            <JobSubTitle>
              {jobDetailsFromState ? jobDetailsFromState.data.companyName : '...loading'} &middot; {jobDetailsFromState ? jobDetailsFromState.data.location : '...loading'}
            </JobSubTitle>
            <JobSubTitle>Added 3 days ago</JobSubTitle>
            <JobButtons>
              <ButtonApply>Apply {boxArrowUp} </ButtonApply>
              <ButtonSave>Unsave {star} </ButtonSave>
            </JobButtons>
          </ColD>
          <Col md={1}>
            <CompanyShare></CompanyShare>
          </Col>
        </Row>

        <Score jobId={searchJobId} />
        <Content>
          <Row alignItems="start">
            <Col md={7}>{jobDetailsFromState && <TechnologiesDetected jobId={searchJobId} tags={jobDetailsFromState.data.tags} />}</Col>
            <Col md={5}>
              <TheChart id={searchJobId} />
            </Col>
          </Row>

          <TitleInfo>Job description</TitleInfo>
          {/* {jobDetailsFromState && jobDetailsFromState.data.description} */}
          {jobDetailsFromState && <p dangerouslySetInnerHTML={{ __html: jobDetailsFromState.data.descriptionH }}></p>}
        </Content>
        <Row>
          <ColInfo>
            <TitleInfo> Company</TitleInfo>
            <TitleInfoDetail>201-500 employees</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Level</TitleInfo>
            <TitleInfoDetail>Mid-Senior</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Employment Type</TitleInfo>
            <TitleInfoDetail>Full time</TitleInfoDetail>
          </ColInfo>
        </Row>
      </JobInfo>
    </JobDescriptionContext.Provider>
  )
}

export default JobDescription
