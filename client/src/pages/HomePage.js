import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobDescription/JobsDescription'
import SkillsList from '../components/Skills/Skills'

import { Container, Row, Col } from '../styled-components/responsive/responsive'

function HomePage() {
  const [noSkills, setNoSkills] = useState(null)
  const { skills } = useSelector((state) => state.visitor)
  const params = useParams()
  function isEmpty(obj) {
    return Object.keys(obj).length === 0
  }

  const noParams = isEmpty(params)

  let show
  useEffect(() => {
    if (skills && skills.length < 3) {
      show = true
    } else {
      show = false
    }
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col md={5} xl={4}>
            <JobsList />
          </Col>

          {skills && noParams ? (
            <Col md={7} xl={6}>
              <SkillsList />
            </Col>
          ) : (
            <Col md={7} xl={6} className="d-none d-md-block">
              <JobsDescription />
            </Col>
          )}

          <Col xl={2} show={'xl'} className="d-none d-xl-block">
            <Trends />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
