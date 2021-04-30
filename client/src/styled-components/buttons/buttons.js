import styled from 'styled-components'
import { lightDark, lightDarker, dark, darkLight, darkLighter } from '../typography/colors'

export const CircleButton = styled.div`
  width: 38px;
  height: 38px;
  text-align: center;
  cursor: pointer;
  color: ${lightDark};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  transition: 0.2s;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`
