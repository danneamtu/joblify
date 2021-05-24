import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { JobDescriptionContext } from '../Context/createContext'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { JobInfo, CompanyLogo, CompanyInfo, CompanyShare, Title, TitleInfo, TitleInfoDetail, ColD, JobSubTitle, ButtonApply, ButtonSave, ColInfo, Content, JobButtons } from './styled'
function Score({ jobId, employmentType }) {
  //
  //
  // @ SCORE FORMULA
  // @ Score formula as independent component
  // @ it calculate how many skills a visitor has from a job description tags
  //
  //
  // Steps:
  // 1. get job skills from redux state
  // 2. get visitor skills from redux state
  // 3. calculate job and visitor skills intersection
  // 4. get procentual formula
  //
  //

  // 1. get job skills from redux state
  const jobState = useSelector((state) => state.job)
  const jobDetails = jobState.data[jobId]
  let jobTags
  if (jobDetails) {
    jobTags = jobDetails.data.tags
  } else {
    jobTags = []
  }

  // 2. get visitor skills from redux state
  const { skills: visitorDetails } = useSelector((state) => state.visitor)
  const visitorSkills = visitorDetails.map((item) => item.skill).filter((item) => item)

  // 3. calculate skills intersection
  const skillsIntersection = jobTags.filter((item) => visitorSkills.includes(item))

  // 3.1 total score
  const totalScore = skillsIntersection.length
  const totalSkills = jobTags.length

  // 4. score formula
  const scoreFormula = (totalScore * 100) / totalSkills || 0

  return (
    <Row>
      <ColInfo>
        <TitleInfo>{jobDetails ? totalSkills : '...'}</TitleInfo>
        <TitleInfoDetail>Technologies detected</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo>{jobDetails ? parseFloat(Number(scoreFormula)).toFixed(2) : '...'} % </TitleInfo>
        <TitleInfoDetail>Your overall score</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo>Employment Type</TitleInfo>
        <TitleInfoDetail>
          <TitleInfoDetail>{employmentType ? employmentType : '...loading'}</TitleInfoDetail>
        </TitleInfoDetail>
      </ColInfo>
    </Row>
  )
}

export default Score
