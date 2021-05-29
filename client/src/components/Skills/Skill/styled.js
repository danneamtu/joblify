import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { light, dark, darkLight, lightDark, lightDarker, accentGreen, darkLightHover, darkLighter } from '../../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  position: sticky;
  font-size: 16px;
  background: ${darkLightHover};
  color: ${lightDark};
  padding: 16px;
  border-radius: 6px;
  border-bottom-right-radius: 6px;
  input {
    border: solid 1px ${darkLighter};
    padding: 10px 12px;
    border-radius: 5px;
    width: calc(66.666%);
    margin-bottom: 12px;
    background: ${darkLight};
    color: ${lightDarker};
  }
`

export const SkillContainer = styled.div`
  border: solid 1px ${lightDarker};
  color: ${lightDarker};
  padding: 8px 16px;
  border-radius: 26px;
  width: calc(33.333333% - 6px);
  flex: 0 0 auto;
  cursor: pointer;
  transition: 0.3s;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  font-size: 15px;

  small {
    transition: 0.3s;
    opacity: 0;
    margin-right: 22px;
    font-size: 13px;
  }
  svg {
    opacity: 0;
    transition: 0.3s;
    position: absolute;
    right: 16px;
    margin-top: auto;
    margin-bottom: auto;
  }
  &:hover,
  &.active {
    background: ${accentGreen};
    border: solid 1px ${accentGreen};
    color: white;
    svg {
      color: white;
      opacity: 1;
    }
    small {
      opacity: 1;
      color: white;
    }
  }
`

export const LoadMore = styled.div`
  justify-content: space-between;
  padding-bottom: 16px;
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
