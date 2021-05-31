import Navbar from '../components/Navbar/Navbar'
import Trends from '../components/Trends/Trends'
import JobsList from '../components/Jobs/JobsList'
import JobsDescription from '../components/Jobs/JobDescription/JobsDescription'

import { Container, Row, Col } from '../styled-components/responsive/responsive'

function HomePage() {
  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <Row>
          <Col md={5} xl={4}>
            <JobsList />
          </Col>
          <Col md={7} xl={6} className="d-none d-md-block">
            <JobsDescription />
          </Col>
          <Col xl={2} show={'xl'} className="d-none d-xl-block">
            <Trends />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default HomePage
