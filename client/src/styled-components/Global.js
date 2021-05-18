import { createGlobalStyle } from 'styled-components'
import { dark, darkLight } from './typography/colors'
export const GlobalStyle = createGlobalStyle`
  html, body{
    background: ${dark}!important;
  }
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
