import styled from 'styled-components'
import { light, dark, darkLightHover, lightDark, lightDarker, darkLight, darkLighter } from '../../../styled-components/typography/colors'

export const ChartContainer = styled.div`
  background: ${darkLightHover};
  padding: 16px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  .mb-4 {
    margin-bottom: 24px;
  }
  .mb-3 {
    margin-bottom: 18px;
  }
  .mb-2 {
    margin-bottom: 12px;
  }
  .mb-1 {
    margin-bottom: 6px;
  }
`
export const Title = styled.h3`
  font-size: 22px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16px;
`
export const TitleSmall = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
`
export const Hr = styled.hr`
  height: 1px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 16px;
  margin-bottom: 16px;
`
export const BarHeight = styled.div`
  height: 160px;
`
