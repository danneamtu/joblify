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
  position: relative;
  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`

export const Chip = styled.div`
  padding: 4px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  font-size: 12px;
`
