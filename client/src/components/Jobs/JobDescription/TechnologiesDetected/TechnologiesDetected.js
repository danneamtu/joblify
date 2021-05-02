import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, StyledLink } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags }) {
  return (
    <Row>
      <Col md={12}>
        <h4>Skills detected</h4>
      </Col>

      {tags.map((tag, index) => (
        <Col md={6}>
          {index < Math.random() * 8 ? (
            <Tag className="active">
              {checkCircleFill}
              {tag}
            </Tag>
          ) : (
            <Tag>
              {checkCircleFill}
              {tag}
            </Tag>
          )}
        </Col>
      ))}
    </Row>
  )
}

export default TechnologiesDetected
