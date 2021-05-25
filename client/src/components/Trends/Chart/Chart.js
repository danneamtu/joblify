import React from 'react'
import { useSelector } from 'react-redux'
import { Bar } from 'react-chartjs-2'
import { ChartContainer, Title, TitleSmall, Hr, BarHeight } from './styled'

function ChartStatistics() {
  //
  //
  // @ CHART STATISTICS
  // @ Show trending skills for the last 7 days
  //
  //

  const data = useSelector((state) => state.jobs)
  let totalJobs
  let totalJobsAll
  if (data.data.data) {
    if (data.data.data[0].Count.length > 0) {
      totalJobsAll = data.data.data[0].AllJobs[0].total
    }
  }

  const { data: stateSkills } = useSelector((state) => state.skills)
  const getSlice = stateSkills.slice(0, 8)
  const theSkillsTotal = getSlice.map((item) => item.total)

  const datas = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        skills: getSlice,
        barPercentage: 0.2,
        barThickness: 12,
        maxBarThickness: 12,
        minBarLength: 4,
        indexAxis: 'x',
        data: theSkillsTotal,
        label: 'Jobs',
        backgroundColor: ['#439084', '#439084'],
      },
    ],
  }
  return (
    <ChartContainer>
      <TitleSmall className="mb-2">Jobs in last 7 days</TitleSmall>
      <Title className="mb-4">{totalJobsAll ? totalJobsAll : '...'}</Title>
      <TitleSmall className="mb-0">Popular skills </TitleSmall>
      <BarHeight>
        <Bar
          options={{
            maintainAspectRatio: false,
            layout: {
              margin: {
                left: '-25px',
              },
              padding: {
                left: -30,
                bottom: -20,
              },
              border: 'none',
            },
            scales: {
              xAxes: [
                {
                  scaleLabel: {
                    display: false,
                    labelString: 'Volunteer Hours',
                  },
                  gridLines: {
                    display: false,
                    color: 'rgba(0, 0, 0, 0)',
                    drawOnChartArea: false,
                    lineWidth: 0,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    drawBorder: false,
                    color: 'rgba(0, 0, 0, 0)',
                    lineWidth: 0,
                    display: false,
                  },
                },
              ],
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                callbacks: {
                  title: function (tooltipItem, data) {
                    const dataIndex = tooltipItem[0].dataIndex
                    const skillData = tooltipItem[0].dataset.skills[dataIndex].skill
                    return skillData
                  },
                  labelColor: function (context) {
                    return {
                      borderColor: '#439084',
                      backgroundColor: '#439084',
                    }
                  },
                },
              },
            },
          }}
          data={datas}
        />
      </BarHeight>
    </ChartContainer>
  )
}

export default ChartStatistics
