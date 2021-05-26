import { useSelector } from 'react-redux'

export const useJobs = () => {
  const data = useSelector((state) => state.jobs)

  let allJobs = null
  let totalJobs = null

  if (data.data.data) {
    allJobs = data.data.data[0].Jobs
    if (data.data.data[0].Count.length > 0) {
      totalJobs = data.data.data[0].Count[0].total
    }
  }
  return {
    allJobs,
    totalJobs,
  }
}
