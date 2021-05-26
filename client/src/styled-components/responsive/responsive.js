import styled from 'styled-components'
// Container, row, col

export const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1280px;
  }
`

// Row classes
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
`
// Col classes
export const Col = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 10px;
  padding-left: 10px;

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

  @media (min-width: 992px) {
    ${(props) => {
      switch (props.lg) {
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

  @media (min-width: 1140px) {
    ${(props) => {
      switch (props.xl) {
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
    switch (props.mx) {
      case 'auto':
        return 'margin-left:auto; margin-right: auto'
      case '1':
        return 'margin-left:4px; margin-right: 4px;'
      case '2':
        return 'margin-left:8px; margin-right: 8px;'
      default:
        return
    }
  }}
  &.d-none {
    display: none;
  }
  @media (min-width: 768px) {
    &.d-md-block {
      display: block;
    }
    &.d-md-inline-block {
      display: inline-block;
    }
  }
  @media (min-width: 992px) {
    &.d-lg-block {
      display: block;
    }
    &.d-lg-inline-block {
      display: inline-block;
    }
  }
  @media (min-width: 1140px) {
    &.d-xl-block {
      display: block !important;
    }
    &.d-xl-inline-block {
      display: inline-block;
    }
  }
`
