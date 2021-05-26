import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { light, lightDarker, accentGreen } from '../../../../styled-components/typography/colors'

export const JobTags = styled.div`
  min-width: 50%;
  display: flex;
  flex-wrap: wrap;
`
export const Title = styled.h4`
  margin-bottom: 1rem;
`
export const Tag = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  color: ${light};
  text-decoration: none;

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
export const TechnologiesContainer = styled.div`
  margin-bottom: 20px;
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
