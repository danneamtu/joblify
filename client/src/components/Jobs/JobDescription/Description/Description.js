import { useFilters } from '../../../../useHooks/useFilters'
import { useJob } from '../../../../useHooks/useJob'
import { Content } from './styled'
function Description({ jobId }) {
  const { filters } = useFilters()
  const job = useJob(filters.currentJobId)
  return <Content>{job && <p dangerouslySetInnerHTML={{ __html: job.descriptionH }}></p>}</Content>
}

export default Description
