export const options = {
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
}
