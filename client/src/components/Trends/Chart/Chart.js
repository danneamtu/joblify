import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { options } from './chartOptions'
import { ChartContainer, TitleSmall, BarHeight } from './styled'

function Chart() {
  const { data: stateSkills } = useSelector((state) => state.skills)
  const getSlice = stateSkills.slice(0, 8)
  const theSkillsTotal = getSlice.map((item) => item.total)

  const dataChart = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        skills: getSlice,
        barThickness: 12,
        maxBarThickness: 12,
        minBarLength: 4,
        data: theSkillsTotal,
        backgroundColor: ['#439084', '#439084'],
      },
    ],
  }

  return (
    <ChartContainer>
      <TitleSmall className="mb-0">Popular skills </TitleSmall>
      <BarHeight>
        <Bar data={dataChart} options={options} />
      </BarHeight>
    </ChartContainer>
  )
}

export const ChartMemo = React.memo(Chart)
