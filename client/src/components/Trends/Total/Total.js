import React from 'react'
import { useSelector } from 'react-redux'
import { TitleSmall, Title, TotalContainer } from './styled'

function Total() {
  const data = useSelector((state) => state.jobs)
  let totalJobsAll
  if (data.data.data) {
    if (data.data.data[0].Count.length > 0) {
      totalJobsAll = data.data.data[0].AllJobs[0].total
    }
  }
  return (
    <TotalContainer>
      <TitleSmall className="mb-2">Jobs in last 7 days</TitleSmall>
      <Title className="mb-2">{totalJobsAll ? totalJobsAll : '...'}</Title>
    </TotalContainer>
  )
}

export default Total
