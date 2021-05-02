import Auth from '../components/Auth/Auth'

import { Container } from '../styled-components/responsive/container'
import { Row } from '../styled-components/responsive/row'
import { Col } from '../styled-components/responsive/col'

function HomePage(props) {
  return (
    <Container>
      <Row>
        <Col md={4} mx="auto">
          <Auth />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage
