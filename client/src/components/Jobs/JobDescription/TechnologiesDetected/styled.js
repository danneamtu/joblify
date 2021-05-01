import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { light, lightDarker, accentBlue, accentGreen } from '../../../../styled-components/typography/colors'

export const JobTags = styled.div`
  min-width: 50%;
  display: flex;
  flex-wrap: wrap;
`
export const Tag = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  color: ${light};
  text-decoration: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active svg {
    color: ${accentGreen};
  }
  & svg {
    margin-right: 8px;
    color: ${lightDarker};
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
