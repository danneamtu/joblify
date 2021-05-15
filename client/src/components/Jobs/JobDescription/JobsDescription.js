import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getJob } from '../../../redux/actions/jobActions'

import styled from 'styled-components'
import { Row } from '../../../styled-components/responsive/row'
import { Col } from '../../../styled-components/responsive/col'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import TheChart from './PieChart/TheChart'

import { boxArrowUp, star, circle } from '../../../assets/icons/icons'

const companyLogo = <img alt="some alt" src="https://media-exp1.licdn.com/dms/image/C4D0BAQGZqU18UiRgmA/company-logo_100_100/0/1584036996496?e=1627516800&v=beta&t=fRi_xTII3AcPqBlZxY_K9pq7XzIltHjuplrqj24SvEI" />

const JobInfo = styled.div`
  background: #1d1d25;
  padding: 32px;
  border-radius: 4px;
  margin-right: 30px;
`
const CompanyLogo = styled.div`
  max-width: 84px;
  margin-bottom: 32px;
  margin-right: 2rem;
  flex: 1 0 0;
  & img {
    width: 100%;
    border-radius: 4px;
  }
`
const CompanyInfo = styled.div`
  margin-bottom: 24px;
`
const CompanyShare = styled.div`
  margin-left: auto;
  text-align: right;
`
const Title = styled.h1`
  font-size: 21px;
  margin-bottom: 4px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
const TitleInfo = styled.h3`
  font-size: 16px;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.94);
`
const TitleInfoDetail = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.64);
  margin: 0;
  margin-bottom: 4px;
  padding: 0;
`
const ColD = styled.div`
  flex: 1 0 0;
`

const JobSubTitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  margin-bottom: 16px;
  padding: 0;
`
const ButtonApply = styled.button`
  font-size: 14px;
  background: #0261fb;
  color: rgba(255, 255, 255, 0.89);
  margin-right: 16px;
  padding: 0.8rem 2rem;
  border: none;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  & svg {
    margin-left: 0.5rem;
  }
`
const ButtonSave = styled.button`
  font-size: 14px;
  background: #292a32;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  & svg {
    margin-left: 0.5rem;
  }
`
const ColInfo = styled.div`
  flex: 1 0 0%;
  border: solid 1px rgba(255, 255, 255, 0.1);
  padding: 16px;
  &:first-child,
  &:last-child {
    border-left: solid 0 rgba(255, 255, 255, 0.1);
    border-right: solid 0 rgba(255, 255, 255, 0.1);
  }
`

const Content = styled.div`
  width: 100%;
  font-size: 15px;
  padding-top: 48px;
  padding-bottom: 48px;
  color: rgba(255, 255, 255, 0.6);
`
const JobButtons = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function createMarkup(desc) {
  return { _html: desc }
}

const JobDescription = (props) => {
  let query = useQuery()
  const searchJobId = query.get('currentJobId')

  useEffect(() => {
    console.log('changed id', searchJobId)
  }, [searchJobId])


  const dispatch = useDispatch()
  const jobState = useSelector((state) => state.job)
  console.log('job from state', jobState)
  const jobDetailsFromState = jobState.data[searchJobId]
  console.log('get this id data', jobDetailsFromState)
  useEffect(() => {
    dispatch(getJob(searchJobId))
  }, [searchJobId])

  return (
    <>
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

        <Row>
          <ColInfo>
            <TitleInfo>{jobDetailsFromState && jobDetailsFromState.data.tags ? jobDetailsFromState.data.tags.length : 0}</TitleInfo>
            <TitleInfoDetail>Technologies detected</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> 38 %</TitleInfo>
            <TitleInfoDetail>Your overall score</TitleInfoDetail>
          </ColInfo>
          <ColInfo>
            <TitleInfo> Employment Type</TitleInfo>
            <TitleInfoDetail>Full time</TitleInfoDetail>
          </ColInfo>
        </Row>

        <Content>
          <Row alignItems="start">
            <Col md={7}>{jobDetailsFromState && <TechnologiesDetected tags={jobDetailsFromState.data.tags} />}</Col>
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
    </>
  )
}

export default JobDescription
