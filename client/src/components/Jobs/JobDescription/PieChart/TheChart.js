import { useContext, useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { JobDescriptionContext } from '../Context/createContext'

const TheChart = ({ id }) => {
  const { scoreContext } = useContext(JobDescriptionContext)

  const scoreFormula = (scoreContext.totalScore * 100) / scoreContext.totalSkills

  const data = {
    datasets: [
      {
        data: [scoreFormula, scoreFormula - 100],
        backgroundColor: ['#438D83', '#2A2B33'],
        borderWidth: 0,
      },
    ],
    labels: ['Your Skills', 'Other Skills'],
  }

  return <>{scoreContext.totalSkills && <Doughnut data={data} />}</>
}

export default TheChart
