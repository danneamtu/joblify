import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { lightDark, lightDarker, accentGreen, darkLight, darkLighter } from '../../../styled-components/typography/colors'

export const AddThis = styled.div`
  box-sizing: border-box;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 15px;
  background: ${darkLight};
  padding: 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: calc(100%-32px);
  color: ${lightDark};
  position: sticky;
  right: 60;
  top: 60px;
  h4 {
    margin-bottom: 6px;
  }
  input,
  input:focus,
  input:hover {
    padding: 10px 10px;
    margin-bottom: 6px;
    background: ${lightDark};
    border: solid 1px ${darkLight};
    color: ${darkLight};
    font-size: 15px;
    border-radius: 5px;
  }
  input:focus-visible {
    outline: -webkit-focus-ring-color auto 0;
  }
  button {
    padding: 8px 10px;
    width: 100%;
    background: ${accentGreen};
    border: none;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`
