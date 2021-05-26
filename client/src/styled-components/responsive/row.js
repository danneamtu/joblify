import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    margin-right: -10px;
    margin-left: -10px;
  }

  ${(props) => {
    switch (props.alignItems) {
      case 'center':
        return 'align-items:center'
      case 'start':
        return 'align-items:start'
      case 'end':
        return 'align-items:end'
      default:
        return
    }
  }}
  ${(props) => {
    switch (props.justifyContent) {
      case 'center':
        return 'justify-content:center'
      case 'start':
        return 'justify-content:start'
      case 'end':
        return 'justify-content:end'
      case 'between':
        return 'justify-content:space-between'
      default:
        return
    }
  }}
  ${(props) => {
    switch (props.mx) {
      case 0:
        return 'margin-left:0; margin-right:0'
      case 1:
        return 'margin-left:.25rem; margin-right:.25rem'
      case 2:
        return 'margin-left:.5rem; margin-right:.5rem'
      case 3:
        return 'margin-left:1rem; margin-right:1rem'
      case 4:
        return 'margin-left:1.5rem; margin-right:1.5rem'
      case 5:
        return 'margin-left:3rem; margin-right:3rem'
      default:
        return
    }
  }}
`
