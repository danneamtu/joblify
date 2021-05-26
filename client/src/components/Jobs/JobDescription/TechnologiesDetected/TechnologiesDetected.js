import React, { useState, useEffect, createContext, useContext } from 'react'
import { useSelector } from 'react-redux'

import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, Title, TechnologiesContainer } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags }) {
  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)

  return (
    <TechnologiesContainer>
      <Row>
        <Col md={12} mb={5}>
          <Title>Matching skills</Title>
        </Col>
        {tags.map((item) =>
          visitorSkills.includes(item)
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
