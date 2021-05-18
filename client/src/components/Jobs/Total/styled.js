import styled from 'styled-components'
import { light, dark, accentBlue, darkLightHover, lightDark, lightDarker, darkLight, darkLighter } from '../../../styled-components/typography/colors'

export const TotalContainer = styled.div`
  background: ${darkLight};
  border-radius: 4px;
  color: ${light};
  margin-bottom: 16px;
  border-left: solid 3px ${accentBlue};
  padding: 16px;
`
export const TotalTitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: white;
  margin: 0;
  text-transform: capitalize;
`
export const TotalSubTitle = styled.h4`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.582);
  margin-top: 4px;
  margin-bottom: 0;
  font-weight: 300;
`
