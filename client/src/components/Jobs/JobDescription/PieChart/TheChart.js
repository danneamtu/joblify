import { PieChart } from 'react-minimal-pie-chart'
import { useState, useEffect } from 'react'
import { light, lightDark, accentBlue, accentGreen } from '../../../../styled-components/typography/colors'

const data = [
  { name: 'html, css, js', value: 33 },
  { name: 'react, node, axios', value: 55 },
]

const TheChart = ({ id }) => {
  const [pieStatus, setPieStatus] = useState(true)

  const showChart = () => {
    return (
      <PieChart
        startAngle={-100}
        data={[
          { title: '40%', value: 20, color: lightDark },
          { title: '60% Skills', value: 80, color: accentGreen },
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
