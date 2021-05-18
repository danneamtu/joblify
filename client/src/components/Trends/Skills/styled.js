import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lightDark, lightDarker, accentGreen, darkLightHover } from '../../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  margin-top: 24px;
  background: ${darkLightHover};
  padding: 16px;
  border-radius: 6px;
  border-bottom-right-radius: 6px;
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
export const StyledLinkMore = styled(StyledLink)`
  font-size: 0.9em;
  margin-top: 0.5em;
`

export const Title = styled.h4`
  font-size: 1em;
  color: ${lightDarker};
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
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
