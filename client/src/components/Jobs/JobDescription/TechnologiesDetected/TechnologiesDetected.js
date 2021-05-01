import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from '../../../../styled-components/responsive/row'
import { Col } from '../../../../styled-components/responsive/col'
import { Tag, StyledLink } from './styled'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'

function TechnologiesDetected({ tags }) {
  return (
    <Row>
      {tags.map((tag, index) => (
        <Col md={6}>
          <StyledLink to="#">
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
          </StyledLink>
        </Col>
      ))}
    </Row>
  )
}

export default TechnologiesDetected
