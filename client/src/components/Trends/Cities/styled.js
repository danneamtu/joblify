import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { light, dark, darkLightHover, lightDark, lightDarker, darkLight, darkLighter } from '../../../styled-components/typography/colors'

export const Title = styled.h4`
  font-size: 22px;
  color: ${lightDarker};
  margin-bottom: 0.5em;
`

export const CityContainer = styled.div`
  background: ${darkLightHover};
  padding: 16px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const ContainerSkills = styled.div`
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px ${lightDark};
  & img {
    margin-right: 12px;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  font-size: 15px;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  min-width: 100%;
  text-decoration: none;
  text-transform: capitalize;
  color: ${lightDarker};
  transition: 0.2s;
  border-bottom: solid 1px ${darkLighter};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    color: ${lightDark};
  }
  & svg {
    font-size: 0.6em;
  }
`

export const TitleSmall = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.5);
  &.mb-4 {
    margin-bottom: 24px;
  }
`
export const Hr = styled.hr`
  height: 1px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Total = styled.span`
  display: inline-block;
  margin-left: auto;
  font-size: 15px;
`
