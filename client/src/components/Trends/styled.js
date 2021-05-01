import styled from 'styled-components'

export const FilterContainer = styled.div`
  color: rgba(187, 187, 187, 0.64);
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    display: flex;
    align-items: center;

    padding-top: 4px;
    padding-bottom: 4px;
  }
  svg {
    margin-right: 5px;
  }
`
export const Chip = styled.div`
  padding: 4px;
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.64);
  background: #1d1d25;
  font-size: 12px;
`
