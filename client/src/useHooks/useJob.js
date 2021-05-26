import { useSelector } from 'react-redux'

export const useJob = (jobId) => {
  const jobState = useSelector((state) => state.job)
  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)
  const jobDetails = jobState.data[jobId]
  if (!jobDetails) {
    return
  }
  const jobTags = jobDetails.data.tags
  const employmentType = jobDetails.data.employmentType
  const companyLogo = jobDetails.data.companyLogo
  const companyName = jobDetails.data.companyName
  const title = jobDetails.data.title
  const location = jobDetails.data.location
  const timestamp = jobDetails.data.timestamp
  const apply = jobDetails.data.apply

  const skillsIntersection = jobTags.filter((item) => visitorSkills.includes(item))
  const totalScore = skillsIntersection.length
  const totalSkills = jobTags.length
  const scoreFormula = (totalScore * 100) / totalSkills || 0

  return {
    title,
    location,
    apply,
    timestamp,
    jobTags,
    companyLogo,
    companyName,
    employmentType,
    visitorSkills,
    totalScore,
    totalSkills,
    scoreFormula,
  }
}
