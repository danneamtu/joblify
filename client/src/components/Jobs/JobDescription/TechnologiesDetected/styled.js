import styled from 'styled-components'
export const Container = styled.div`
  width: 100%;
  display: flex;
`
export const JobTags = styled.div`
  min-width: 50%;
  display: flex;
  flex-wrap: wrap;
`
export const Tag = styled.div`
  min-width: 50%;
  padding-top: 4px;
  padding-bottom: 4px;
`
export const ChartPie = styled.div`
  min-width: 33.33333%;
  display: flex;
  flex-wrap: wrap;
  & img {
    width: 100%;
  }
`
