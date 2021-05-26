import { useSelector } from 'react-redux'

export const useJob = (jobId) => {
  const jobState = useSelector((state) => state.job)
  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)
  const jobDetails = jobState.data[jobId]

  let jobTags = []
  let employmentType

  jobDetails && (jobTags = jobDetails.data.tags)
  jobDetails && (employmentType = jobDetails.data.employmentType)

  const skillsIntersection = jobTags.filter((item) => visitorSkills.includes(item))
  const totalScore = skillsIntersection.length
  const totalSkills = jobTags.length
  const scoreFormula = (totalScore * 100) / totalSkills || 0

  return {
    jobTags,
    employmentType,
    visitorSkills,
    totalScore,
    totalSkills,
    scoreFormula,
  }
}
