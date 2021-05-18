import styled from 'styled-components'
import { lightDark, lightDarker, light, dark, darkLight, darkLighter } from '../typography/colors'

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

export const Btn = styled.a`
  font-size: 14px;
  margin-right: 16px;
  padding: 0.8rem 2rem;
  border: solid 1px transparent;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: 0.24s;
  text-decoration: none;
  &.btn-primary {
    background: #0261fb;
    border-color: #0261fb;
    color: rgba(255, 255, 255, 0.89);
  }
  &.btn-dark {
    background: ${darkLighter};
    border-color: ${darkLighter};
    color: rgba(255, 255, 255, 0.89);
  }

  &.btn-outline {
    background: transparent;
    border-color: ${lightDarker};
    color: ${lightDarker};
  }
  &.btn-outline:hover {
    background: ${darkLight};
    border-color: ${lightDarker};
    color: ${lightDarker};
  }
  &.btn-block {
    min-width: 100%;
  }
  &.d-inline-flex {
    display: inline-flex;
  }
  &.d-flex {
    display: flex;
  }
  &.ai-center {
    align-items: center;
  }
  &.jc-center {
    justify-content: center;
  }

  &.text-center {
    text-align: center;
  }
  &.left-icon svg {
    margin-right: 8px;
  }
  &.right-icon svg {
    margin-left: 8px;
  }
  &.absolute-left svg {
    margin-left: 8px;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  &.btn-circle {
    width: 38px !important;
    height: 38px !important;
    text-align: center;
    cursor: pointer;
    color: ${lightDark};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    position: relative;
    padding: 0;
    margin-right: 8px;
    &:hover {
      background: rgba(255, 255, 255, 0.04);
    }
  }
`
