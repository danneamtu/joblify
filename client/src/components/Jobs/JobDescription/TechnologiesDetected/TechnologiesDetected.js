import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, StyledLink } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags }) {
  const { skills } = useSelector((state) => state.visitor)
  const lowerSkills = skills.map((skill) => skill.toLowerCase())
  return (
    <Row>
      <Col md={12} mb={4}>
        <h4>Skills detected</h4>
      </Col>
      {tags?.map((tag) => (
        <Col md={6}>
          <Tag className={lowerSkills.indexOf(tag) > 0 && 'active'}>
            {checkCircleFill}
            {tag}
          </Tag>
        </Col>
      ))}
    </Row>
  )
}

export default TechnologiesDetected
