import React from 'react'
import { Container, ChartPie, JobTags, Tag } from './styled'

function TechnologiesDetected({ tags }) {
  return (
    <Container>
      <JobTags>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </JobTags>
      <ChartPie>
        <img src="https://www.meta-chart.com/assets/images/pie/pie_percent.png" />
      </ChartPie>
    </Container>
  )
}

export default TechnologiesDetected
