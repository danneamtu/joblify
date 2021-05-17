import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobDescription/JobsDescription'

import { Container } from '../styled-components/responsive/container'
import { Row } from '../styled-components/responsive/row'
import { Col } from '../styled-components/responsive/col'

function JobPage(props) {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <JobsDescription />
        </Col>
      </Row>
    </Container>
  )
}

export default JobPage
