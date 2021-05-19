import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lightDark, lightDarker, accentGreen, darkLighter } from '../../../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  padding-bottom: 1em;
  margin-bottom: 1em;
  & img {
    margin-right: 15px;
  }
`
export const Total = styled.span`
  display: inline-block;
  margin-left: auto;
  font-size: 15px;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 6px;
  padding-bottom: 6px;
  min-width: 100%;
  text-decoration: none;
  color: ${lightDarker};
  transition: 0.2s;

  &:last-child {
    border-bottom: solid 1px red;
  }
  &:hover {
    color: ${lightDark};
  }
  & svg {
    font-size: 0.6em;
  }
  &.active svg {
    color: ${accentGreen};
  }
`
export const SkillLi = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  border-bottom: solid 1px ${darkLighter};
  &:last-child {
    border-bottom: none;
  }
  & svg {
    margin-left: 4px;
    margin-top: 4px;
    cursor: pointer;
  }
  &:hover {
    color: ${lightDark};
  }
  &.active svg {
    color: ${accentGreen};
  }
`
export const StyledLinkMore = styled(StyledLink)`
  font-size: 0.9em;
  margin-top: 0.5em;
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
export const Logo = styled.div`
  max-width: 1.5em;
  max-height: 1.5em;
  margin-right: 0.5em;
  & img {
    width: 100%;
  }
`
export const ToggleSkill = styled.div``
