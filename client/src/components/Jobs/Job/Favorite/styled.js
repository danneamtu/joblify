import styled from 'styled-components'

export const Favorite = styled.div`
  cursor: pointer;
  z-index: 22;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  ${(props) =>
    props.save === false &&
    `display: inline-block;
      position: absolute;
      right: 0px;
      top: 12px;
    `}
`

export const Chip = styled.span`
  display: inline-block;
  padding: 4px 12px;
  background: #292a33;
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
  border-radius: 4px;
  margin-right: 8px;
`
