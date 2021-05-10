import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, StyledLink, Title, TechnologiesContainer } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags }) {
  const { skills: visitorSkills } = useSelector((state) => state.visitor)
  const visitorSkillsArr = visitorSkills.map((item) => item.skill).filter((item) => item)

  return (
    <TechnologiesContainer>
      <Row>
        <Col md={12} mb={5}>
          <Title>Skills detected</Title>
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
