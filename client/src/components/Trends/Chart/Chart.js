import React from 'react'
import { Doughnut, BarChart, Bar, VerticalBar } from 'react-chartjs-2'
import { ChartContainer, Title, TitleSmall, Hr, BarHeight } from './styled'

function ChartStatistics() {
  const datas = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        labels: ['', '', '', '', ''],
        barPercentage: 0.2,
        barThickness: 12,
        maxBarThickness: 12,
        minBarLength: 4,
        indexAxis: 'x',
        label: 'Skills',
        data: [5, 19, 7, 7, 6, 5, 4],
        backgroundColor: ['rgba(224, 75, 107, 0.527)', 'rgba(255, 159, 64, 0.2)', 'rgba(255, 205, 86, 0.2)'],
        borderColor: ['rgba(224, 75, 107, 0.527)', 'rgb(255, 159, 64)'],
        borderWidth: 0,
      },
    ],
  }

  return (
    <ChartContainer>
      <TitleSmall className="mb-2">Jobs in last 7 days</TitleSmall>
      <Title className="mb-4">991</Title>
      <TitleSmall className="mb-0">Popular</TitleSmall>
      <BarHeight>
        <Bar style={{ height: '55px' }} height={55} options={{ maintainAspectRatio: false }} data={datas} />
      </BarHeight>
    </ChartContainer>
  )
}

export default ChartStatistics
