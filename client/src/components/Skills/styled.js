import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lightDark, lightDarker, accentGreen, darkLightHover } from '../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  font-size: 15px;
  background: ${darkLightHover};
  color: ${lightDark};
  padding: 16px;
  border-radius: 6px;
  border-bottom-right-radius: 6px;
  .mt-4 {
    margin-top: 24px;
  }
  .mt-3 {
    margin-top: 18px;
  }
  .mt-2 {
    margin-top: 12px;
  }
  .mt-1 {
    margin-top: 6px;
  }
  .mt-0 {
    margin-top: 0;
  }
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
export const PopularSkills = styled.div`
  margin-top: 16px;
  font-size: 15px;
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
  border: none;
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
  font-weight: 400;
  color: ${lightDarker};
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

export const Hr = styled.hr`
  height: 1px;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  margin-top: 16px;
  margin-bottom: 16px;
`
