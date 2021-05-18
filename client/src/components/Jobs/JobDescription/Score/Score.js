import React, { useContext } from 'react'
import { JobDescriptionContext } from '../Context/createContext'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { JobInfo, CompanyLogo, CompanyInfo, CompanyShare, Title, TitleInfo, TitleInfoDetail, ColD, JobSubTitle, ButtonApply, ButtonSave, ColInfo, Content, JobButtons } from './styled'
function Score({ jobId, employmentType }) {
  const { scoreContext } = useContext(JobDescriptionContext)
  const scoreFormula = (scoreContext.totalScore * 100) / scoreContext.totalSkills || 0

  return (
    <Row>
      <ColInfo>
        <TitleInfo>{scoreContext.totalSkills}</TitleInfo>
        <TitleInfoDetail>Technologies detected</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo>{parseFloat(Number(scoreFormula)).toFixed(2)} % </TitleInfo>
        <TitleInfoDetail>Your overall score</TitleInfoDetail>
      </ColInfo>
      <ColInfo>
        <TitleInfo> Employment Type</TitleInfo>
        <TitleInfoDetail>
          <TitleInfoDetail>{employmentType ? employmentType : '...loading'}</TitleInfoDetail>
        </TitleInfoDetail>
      </ColInfo>
    </Row>
  )
}

export default Score
