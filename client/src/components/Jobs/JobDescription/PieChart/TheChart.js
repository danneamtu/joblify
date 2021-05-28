import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { accentGreen, darkLighter } from '../../../../styled-components/typography/colors'

const TheChart = ({ scoreFormula }) => {
  const data = {
    datasets: [
      {
        data: [scoreFormula, scoreFormula - 100],
        backgroundColor: [accentGreen, darkLighter],
        borderWidth: 0,
      },
    ],
    labels: ['Your Skills', 'Diference'],
  }
  return (
    <>
      <Doughnut data={data} />
    </>
  )
}

export const TheChartMemoized = React.memo(TheChart)
