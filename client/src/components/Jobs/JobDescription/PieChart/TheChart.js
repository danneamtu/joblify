import { useContext, useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Doughnut } from 'react-chartjs-2'
import { JobDescriptionContext } from '../Context/createContext'

const TheChart = ({ jobId }) => {
  //
  //
  // @ SCORE FORMULA
  // @ Score formula as independent component
  // @ It calculate how many skills a visitor has from a job description tags
  //
  //
  // Steps:
  // 1. Get job skills from redux state
  // 2. Get visitor skills from redux state
  // 3. Calculate job and visitor skills intersection
  // 4. Get procentual formula
  //
  //

  // 1. Get job skills from redux state
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

  // 2. Get visitor skills from redux state
  const { skills } = useSelector((state) => state.visitor)
  const visitorSkills = skills.map((item) => item.skill).filter((item) => item)

  // 3. Calculate skills intersection
  const skillsIntersection = jobTags.filter((item) => visitorSkills.includes(item))

  // 3.1 Total score
  const totalScore = skillsIntersection.length
  const totalSkills = jobTags.length

  // 4. Score formula
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
