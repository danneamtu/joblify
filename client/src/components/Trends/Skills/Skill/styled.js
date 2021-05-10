import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lightDark, lightDarker, accentGreen } from '../../../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  padding-bottom: 1em;
  margin-bottom: 1em;
  border-bottom: solid 1px lightDark;
  & img {
    margin-right: 12px;
  }
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  min-width: 100%;
  text-decoration: none;
  color: ${lightDarker};
  transition: 0.2s;
  border-radius: 0.25rem;
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

  & svg {
    margin-left: 4px;
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

export const Title = styled.h4`
  font-size: 1em;
  color: ${lightDarker};
  margin-bottom: 1em;
  margin-top: 1em;
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
