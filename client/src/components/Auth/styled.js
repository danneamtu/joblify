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
  background: ${lightDarker};
  padding: 0.8rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
  border: none;
`
export const ButtonGoogle = styled.button`
  background: red;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
  display: block;
  width: 100%;
`
export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
