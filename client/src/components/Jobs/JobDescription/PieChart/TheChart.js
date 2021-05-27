import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useJob } from '../../../../useHooks/useJob'
import { accentGreen, darkLighter } from '../../../../styled-components/typography/colors'

const TheChart = ({ jobId }) => {
  const job = useJob(jobId)
  const data = {
    datasets: [
      {
        data: [job && job.scoreFormula, job && job.scoreFormula - 100],
        backgroundColor: [accentGreen, darkLighter],
        borderWidth: 0,
      },
    ],
    labels: ['Your Skills', 'Diference'],
  }
  return <Doughnut data={data} />
}

export const TheChartMemoised = React.memo(TheChart)
