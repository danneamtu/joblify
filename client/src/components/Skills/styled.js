import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { light, dark, darkLight, lightDark, lightDarker, accentGreen, darkLightHover, darkLighter, accentBlue, accentBlueHover } from '../../styled-components/typography/colors'

export const ContainerSkills = styled.div`
  font-size: 15px;
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

export const Ul = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  padding: 10px;
  justify-content: space-between;
`

export const LoadMore = styled.div`
  border: solid 1px ${darkLighter};
  color: ${lightDarker};
  padding: 8px 16px;
  border-radius: 26px;

  cursor: pointer;
  transition: 0.3s;

  font-weight: 400;
  :hover {
    background: ${darkLighter};
    border: solid 1px ${darkLighter};
    color: ${lightDark};
  }
`

export const BestMatch = styled.div`
  border: solid 1px ${darkLighter};
  color: ${lightDarker};
  padding: 12px 22px;
  border-radius: 26px;
  align-self: start;
  display: inline-block;
  cursor: pointer;
  transition: 0.3s;
  margin-left: auto;
  &.active {
    background: ${accentBlue};
    border: solid 1px ${accentBlue};
    color: ${light};
    cursor: pointer;
  }
  &.disabled,
  &.disabled:hover {
    background: ${darkLighter};
    border: solid 1px ${darkLighter};
    color: ${lightDark};
    cursor: not-allowed;
    pointer-events: all !important;
  }
  :hover {
    background: ${accentBlueHover};
    border: solid 1px ${accentBlueHover};

    color: ${lightDark};
  }
`

export const Buttons = styled.h4`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
`
