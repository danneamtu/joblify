import { ChartMemo } from './Chart/Chart'
import Total from './Total/Total'
import Cities from './Cities/Cities'
import Skills from './Skills/Skills'
// import Add from './Add/Add'

function Filter() {
  return (
    <>
      <Total />
      <ChartMemo />
      {/* <Add /> */}
      <Cities />
      <Skills />
    </>
  )
}

export default Filter
