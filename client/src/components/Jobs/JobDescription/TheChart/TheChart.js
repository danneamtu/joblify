import { PieChart } from 'react-minimal-pie-chart'
import { useState, useEffect } from 'react'
const data = [
  { name: 'html, css, js', value: 33 },
  { name: 'react, node, axios', value: 55 },
]

const TheChart = ({ id }) => {
  const [pieStatus, setPieStatus] = useState(true)

  const showChart = () => {
    return (
      <PieChart
        data={[
          { title: 'One', value: 10, color: '#E38627' },
          { title: 'Two', value: 15, color: '#C13C37' },
          { title: 'Three', value: 20, color: '#6A2135' },
        ]}
      />
    )
  }

  useEffect(() => {
    showChart()
  }, [id])

  const lineWidth = 60
  return <>{showChart()}</>
}

export default TheChart
