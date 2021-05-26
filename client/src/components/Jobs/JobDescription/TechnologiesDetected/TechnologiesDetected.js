import { useJob } from '../../../../useHooks/useJob'
import { Row, Col } from '../../../../styled-components/responsive/responsive'
import { checkCircle, checkCircleFill } from '../../../../assets/icons/icons'
import { Tag, Title, TechnologiesContainer } from './styled'

function TechnologiesDetected({ jobId }) {
  const job = useJob(jobId)
  return (
    <TechnologiesContainer>
      <Row>
        <Col md={12} mb={5}>
          <Title>Matching skills</Title>
        </Col>
        {job.jobTags.map((item) =>
          job.visitorSkills.includes(item)
            ? item && (
                <Col md={6}>
                  <Tag className={'active'}>
                    {checkCircleFill}
                    {item}
                  </Tag>
                </Col>
              )
            : item && (
                <Col md={6}>
                  <Tag>
                    {checkCircle}
                    {item}
                  </Tag>
                </Col>
              )
        )}
      </Row>
    </TechnologiesContainer>
  )
}

export default TechnologiesDetected
