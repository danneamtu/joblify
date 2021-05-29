import { useSelector } from 'react-redux'

export const useScore = (tags) => {
  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)

  const skillsIntersection = tags.filter((item) => visitorSkills.includes(item))
  const totalScore = skillsIntersection.length
  const totalSkills = tags.length
  const scoreFormula = parseFloat(Number((totalScore * 100) / totalSkills || 0)).toFixed(2)

  return {
    visitorSkills,
    totalScore,
    totalSkills,
    scoreFormula,
  }
}
