import styled from 'styled-components'
import { lightDark, lightDarker, darkLight } from '../../styled-components/typography/colors'

export const ContainerForm = styled.div`
  background: ${darkLight};
  padding: 1.4rem;
  border-radius: 0.5rem;
  width: 340px;
  margin: auto;
  margin-top: 90px;
`
export const Button = styled.button`
  background: none;
  color: ${lightDarker};
  padding: 0.8rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
  border: none;
`
export const ButtonGoogle = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
  position: relative;
  border: solid 1px ${lightDarker};
  background: none;
  color: ${lightDark};
  margin-top: 16px;
  margin-bottom: 16px;
  & svg {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 24px;
    margin-top: auto;
    margin-bottom: auto;
  }
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.86);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
`
export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;
  margin-right: -12px;
`
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 400;
  color: ${lightDark};
`
export const Small = styled.h5`
  font-size: 14px;
  font-weight: 400;
  color: ${lightDark};
`

export const Or = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 1px;
    width: calc(50% - 30px);
    background: ${lightDarker};
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    height: 1px;
    width: calc(50% - 30px);
    background: ${lightDarker};
    z-index: 1;
  }
  & span {
    z-index: 4;
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    text-align: center;
    line-height: 36px;
    background: ${lightDarker};
  }
`

export const Name = styled.div`
  display: flex;
  justify-content: space-between;
`
