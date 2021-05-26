import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'

const TheChart = ({ jobId }) => {
  const jobState = useSelector((state) => state.job)
  const jobDetails = jobState.data[jobId]
  let jobTags
  let employmentType
  if (jobDetails) {
    jobTags = jobDetails.data.tags
    employmentType = jobDetails.data.employmentType
  } else {
    jobTags = []
  }

  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)

  const skillsIntersection = jobTags.filter((item) => visitorSkills.includes(item))

  const totalScore = skillsIntersection.length
  const totalSkills = jobTags.length

  const scoreFormula = (totalScore * 100) / totalSkills || 0
  const data = {
    datasets: [
      {
        data: [scoreFormula, scoreFormula - 100],
        backgroundColor: ['#438D83', '#2A2B33'],
        borderWidth: 0,
      },
    ],
    labels: ['Your Skills', 'Total Skills'],
  }

  return (
    <>
      <Doughnut data={data} />
    </>
  )
}

export default TheChart
