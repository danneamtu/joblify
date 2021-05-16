import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobDescription/JobsDescription'

import { Container } from '../styled-components/responsive/container'
import { Row } from '../styled-components/responsive/row'
import { Col } from '../styled-components/responsive/col'

function HomePage(props) {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <JobsList />
        </Col>
        <Col md={6}>
          <JobsDescription />
        </Col>
        <Col md={2}>
          <Trends />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
