import React, { useState, useEffect, createContext, useContext } from 'react'
import { useSelector } from 'react-redux'
import { JobDescriptionContext } from '../Context/createContext'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, Title, TechnologiesContainer } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags, jobId }) {
  const { skills: visitorSkills } = useSelector((state) => state.visitor)
  const visitorSkillsArr = visitorSkills.map((item) => item.skill).filter((item) => item)
  const skillsIntersection = tags.filter((item) => visitorSkillsArr.includes(item))

  const totalScore = skillsIntersection.length
  const totalSkills = tags.length

  const { scoreContext, setScoreContext } = useContext(JobDescriptionContext)

  useEffect(() => {
    setScoreContext({ totalScore, totalSkills })
  }, [jobId])

  return (
    <TechnologiesContainer>
      <Row>
        <Col md={12} mb={5}>
          <Title>Matching skills</Title>
        </Col>
        {tags.map((item) =>
          visitorSkillsArr.includes(item)
            ? item && (
                <Col md={6}>
                  <Tag className={'active'}>
                    {checkCircleFill}
                    {item}
                  </Tag>
                </Col>
              )
            : item && (
                <Col md={6}>
                  <Tag>
                    {checkCircle}
                    {item}
                  </Tag>
                </Col>
              )
        )}
      </Row>
    </TechnologiesContainer>
  )
}

export default TechnologiesDetected
