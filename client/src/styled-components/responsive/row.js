import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
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
      default:
        return
    }
  }}
`