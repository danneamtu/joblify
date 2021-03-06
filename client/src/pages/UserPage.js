import { useDispatch } from 'react-redux'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobDescription/JobsDescription'
import Details from '../components/User/Details/Details'

import { Container } from '../styled-components/responsive/container'
import { Row } from '../styled-components/responsive/row'
import { Col } from '../styled-components/responsive/col'
import Navbar from '../components/Navbar/Navbar'
let isMobile = window.matchMedia('(max-width: 768px)')

function UserPage(props) {
  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={5} xl={4}>
            <JobsList />
          </Col>
          <Col className="d-none d-md-block" md={7} xl={6}>
            <Details />
          </Col>
          <Col className="d-none d-xl-block" show={'xl'} xl={2}>
            <Trends />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UserPage
