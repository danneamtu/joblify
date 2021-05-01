import styled from 'styled-components'

export const Col = styled.div`
  @media (min-width: 768px) {
    ${(props) => {
      switch (props.md) {
        case 1:
          return 'flex: 0 0 auto; width: 8.3333333333%; '
        case 2:
          return 'flex: 0 0 auto; width: 16.6666666667%;'
        case 3:
          return 'flex: 0 0 auto; width: 25%;'
        case 4:
          return ' flex: 0 0 auto; width: 33.3333333333%;'
        case 5:
          return ' flex: 0 0 auto; width: 41.6666666667%;'
        case 6:
          return ' flex: 0 0 auto; width: 50%;'
        case 7:
          return ' flex: 0 0 auto; width: 58.3333333333%;'
        case 8:
          return ' flex: 0 0 auto; width: 66.6666666667%'
        case 9:
          return ' flex: 0 0 auto; width: 75%'
        case 10:
          return ' flex: 0 0 auto; width: 83.3333333333%;'
        case 11:
          return ' flex: 0 0 auto; width: 91.6666666667%;'
        case 12:
          return ' flex: 0 0 auto; width: 100%;'
        default:
          return
      }
    }}
  }
  ${(props) => {
    switch (props.textAlign) {
      case 'center':
        return 'text-align:center'
      case 'start':
        return 'text-align:start'
      case 'end':
        return 'text-align:end'
      default:
        return
    }
  }}
`
