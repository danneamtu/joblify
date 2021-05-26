import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import Score from './Score/Score'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Description from './Description/Description'

import { getJob } from '../../../redux/actions/jobActions'

import { Row } from '../../../styled-components/responsive/row'
import { Col } from '../../../styled-components/responsive/col'
import { Btn } from '../../../styled-components/buttons/buttons'
import TechnologiesDetected from './TechnologiesDetected/TechnologiesDetected'
import TheChart from './PieChart/TheChart'
import FavoriteStar from '../Job/Favorite/Favorite'

import { boxArrowUp } from '../../../assets/icons/icons'
import { JobInfo, CompanyLogo, CompanyShare, Title, TitleInfo, JobSubSubTitle, TitleInfoDetail, ColD, JobSubTitle, ColInfo, Content, JobButtons } from './styled'

import { useJobsFilters } from '../../../useHooks/filters'
import { useAllJobs } from '../../../useHooks/useJob'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

const JobDescription = ({ url }) => {
  const data = useSelector((state) => state.jobs)
  let allJobs = null
  let totalJobs
  if (data.data.data) {
    allJobs = data.data.data[0].Jobs
    if (data.data.data[0].Count.length > 0) {
      totalJobs = data.data.data[0].Count[0].total
    }
  }

  const dispatch = useDispatch()

  let currentJobId
  let query = useQuery()
  currentJobId = query.get('currentJobId')

  const jobState = useSelector((state) => state.job)
  const lastJobIdFromState = useSelector((state) => state.jobs)

  if (!currentJobId) {
    if (lastJobIdFromState.data.data && totalJobs > 0) {
      const jobDetailsFromState = lastJobIdFromState.data.data[0].Jobs[0]
      currentJobId = jobDetailsFromState._id
    }
  }

  const jobDetailsFromState = jobState.data[currentJobId]
  let apply
  if (jobDetailsFromState) {
    Array.isArray(jobDetailsFromState.data.apply) ? (apply = jobDetailsFromState.data.apply[0]) : (apply = jobDetailsFromState.data.apply)
  } else {
  }

  useEffect(() => {
    dispatch(getJob(currentJobId))
  }, [dispatch, currentJobId])

  return (
    <>
      {!totalJobs ? (
        <JobInfo>
          <Title>Didn't find any jobs.</Title>
          <JobSubTitle>Keep searching with less filters.</JobSubTitle>
        </JobInfo>
      ) : (
        <JobInfo>
          <Header jobId={currentJobId} />
          <Score jobId={currentJobId} />
          <Content>
            <Row alignItems="start">
              <Col md={6}>
                <TechnologiesDetected jobId={currentJobId} />
              </Col>
              <Col md={6}>
                <TheChart jobId={currentJobId} />
              </Col>
            </Row>
          </Content>
          <Description jobId={currentJobId} />
          <Footer jobId={currentJobId} />
        </JobInfo>
      )}
    </>
  )
}

export default JobDescription
