import { useJob } from '../../../../useHooks/useJob'
import { Content } from './styled'
function Description({ jobId }) {
  const job = useJob(jobId)
  return <Content>{job && <p dangerouslySetInnerHTML={{ __html: job.descriptionH }}></p>}</Content>
}

export default Description
